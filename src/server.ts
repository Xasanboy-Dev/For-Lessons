import express, { Request, Response } from "express"
import cors from "cors"
import { register, login, getAllUsers } from "./auth"
const server = express()
const PORT = 7070
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.post("/register", register)
server.get('/login', login)
server.get('/users', getAllUsers)
server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})