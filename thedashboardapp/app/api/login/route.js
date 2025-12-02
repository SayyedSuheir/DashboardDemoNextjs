import Users from '@/models/Users';
import connectDB from '@/app/lib/mongodb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        await connectDB();
        const { email, password } = await request.json();

        // 1️⃣ Validate input
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // 2️⃣ Find user by email
        const user = await Users.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        // 3️⃣ Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        // 4️⃣ Create JWT token (optional)
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // 5️⃣ Return success response with token
        return NextResponse.json(
            { message: "Login successful", token },
            { status: 200 }
        );

    } catch (err) {
        console.error("Login error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
