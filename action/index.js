"use server"

import { signIn } from "@/auth"
import connectMongo from "@/db/connectMongo"
import { ratingModel } from "@/models/ratings.model"
import { reviewModel } from "@/models/reviews.model"
import { replaceIDinArray } from "@/utils/data.utils"

export async function login(formData) {
    try {
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })
        return res
    } catch (error) {
        throw new Error(error)
    }
}
