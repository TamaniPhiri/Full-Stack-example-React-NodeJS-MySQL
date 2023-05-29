import mysql from 'mysql2'

const pool=mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password:'Troi1576',
    database:'fullstack',
}).promise()

    export async function getUsers(){
    const [users] = await pool.query('SELECT * FROM demo');
    return users
    }

    export async function getUser(id){
        const [userId] = await pool.query('SELECT * FROM demo where id = ?',[id]);
        return userId[0]
    }

    export async function createUser(id,name,description){
        const [user] = await pool.query(`insert into demo values(?,?,?)`,[id,name,description]);
        return user
    }

