import { Pool } from "pg"

const pool = new Pool({ connectionString: "postgres://postgres:1234@localhost:5432/auth" })

pool.connect(error => {
    if (error == null) {
        console.log(`Database connected!`)
    } else {
        console.log(`Connected error: ` + error)
    }
})

export async function createUser(email: string, password: string, name: string, surname: string) {
    const user = (await pool.query(`SELECT * FROM users WHERE email = $1`, [email])).rows
    if (user[0] == undefined) {
        const sql: string = "INSERT INTO users (name,surname,password,email) VALUES ($1,$2,$3,$4);"
        await pool.query(sql, [name, surname, password, email])
    } else {
        return "Bad connection"
    }
}

export async function loginaccount(email: string, password: string) {
    const sql: string = "SELECT * FROM users WHERE email = $1 AND password = $2";
    (await pool.query(sql, [email, password])).rows
}


export async function findUser(email: string) {
    const sql: string = `SELECT * FROM users WHERE email = $1`
    const users = await pool.query(sql, [email])
}
export async function allUsers() {
    const sql: string = `SELECT * FROM users;`
    const users = await pool.query(sql)
    return users.rows
}
export async function getUsers() {
    const allUsers = (await pool.query(`SELECT * FROM users`)).rows
    return allUsers
}