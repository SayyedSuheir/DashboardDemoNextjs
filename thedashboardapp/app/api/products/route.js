import products from '@/models/products';
import connectDB from '@/app/_lib/mongodb';

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        await connectDB();
        const { name,description, type, price } = await request.json();

        // Validation checks
        if (!name || !description || !type || !price) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        

      
    
        
        // Create new user
        const newProduct = new products({
            name,
            decription,
            type,
            price
        });

        await newProduct.save();

        return NextResponse.json(
            { message: "New product added successfully" },
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