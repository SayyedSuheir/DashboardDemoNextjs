import Users from '@/models/Users';
import connectDB from '@/app/_lib/mongodb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        await connectDB();
        const { name, email, password, confirmPassword } = await request.json();

        // Validation checks
        if (!name || !email || !password || !confirmPassword) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        if (password !== confirmPassword) {
            return NextResponse.json(
                { error: "Passwords do not match" },
                { status: 400 }
            );
        }

        // Optional: Add password strength validation
        if (password.length < 8) {
            return NextResponse.json(
                { error: "Password must be at least 8 characters long" },
                { status: 400 }
            );
        }

        // Check if user already exists
        const userExistence = await Users.findOne({ email });
        
        if (userExistence) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 409 } // 409 Conflict
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create new user
        const newUser = new Users({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return NextResponse.json(
            { message: "User registered successfully" },
            { status: 201 }
        );

    } catch (err) {
        console.error("Registration error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}