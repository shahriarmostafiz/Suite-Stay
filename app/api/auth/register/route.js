import connectMongo from "@/db/connectMongo"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { userModel } from "@/models/users.model"

export const POST = async (request) => {

    const {
        fname,
        lname,
        email,
        password
    } = await request.json()
    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = {
        name: `${fname} ${lname}`,
        email,
        password: hashedPassword
    }
    try {
        await connectMongo()
        await userModel.create(newUser)
        return new NextResponse("User Created", {
            status: 201
        })

    } catch (error) {
        return new NextResponse("Registration Failed", {
            status: 500
        })

    }


}