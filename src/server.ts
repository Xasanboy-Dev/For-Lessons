import express from "express"
import cors from "cors"
import { register, login } from "./auth"
const server = express()
const PORT = 8080
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.post("/register", register)
server.post('/login', login)

server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})