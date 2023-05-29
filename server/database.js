import mysql from 'mysql2'

const pool=mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password:'Troi1576',
    database:'fullstack',
}).promise()

    async function getRows(){
    const [rows] = await pool.query('SELECT * FROM demo');
    return rows
}

const notes =await getRows();
console.log(notes);
