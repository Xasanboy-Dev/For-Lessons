import { Request, Response } from "express";
import { allUsers, createUser, getUsers } from "./users";
type RegisterBody = {
    email: string
    password: string
    name: string
    surname: string
}
type LoginBody = {
    email: string
    password: string
}
export async function register(req: Request, res: Response) {
    try {
        const body: RegisterBody = req.body
        const { email, password, name, surname } = body
        await createUser(email, password, name, surname)
        res.status(201).json({ message: "Register succses!" })
    } catch (error: any) {
        res.status(200).json({ message: error.message })
    }
}


export async function login(req: Request, res: Response) {
    try {
        const users = await allUsers()
        res.status(200).json({ message: "All Users", users })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export async function getAllUsers(req: Request, res: Response) {
    try {
        res.status(200).json({ message: getUsers })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}