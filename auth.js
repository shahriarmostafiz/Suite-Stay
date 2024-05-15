import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import mongoClientPromise from "./db/mongoClientPromise";
import Credentials from "next-auth/providers/credentials"
import { userModel } from "./models/users.model";
import bcrypt from "bcryptjs"


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, { databaseName: "Suite-Stay" }),
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials == null) {
                    return null
                }
                try {
                    const user = await userModel.findOne({ email: credentials.email })
                    if (user) {
                        const isMatch = await bcrypt.compare(credentials.password, user.password)
                        if (isMatch) {
                            return user
                        }
                        else {
                            throw new Error("invalid password")
                        }
                    }
                    else {
                        throw new Error("user not found")
                    }
                } catch (error) {
                    throw new Error(error)
                }

            }

        }),
        GoogleProvider({
            clientId: process.env.Google_Client_Id,
            clientSecret: process.env.Google_Client_Secret
        })
    ]
})