import Users from '@/models/Users';
import connectDB from '@/app/lib/mongodb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';


export async function POST(request){
    try{
        await connectDB();
        const {name,email,password} = await request.json();
        const userExistense = await Users.findOne({email})
        if(userExistense){
            return NextResponse.json({error:"user email existed"})
        }

        const hashedpassword = await bcrypt.hash(password,10)

        const newUser = new Users({
            name,
            email,
            password: hashedpassword

        })
        await newUser.save();
        return NextResponse.json({message: "new User registered",status:201})

    }catch(err){
        return NextResponse.json({error: err.message, status:500});
    }
}