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

    async function getRow(id){
        const [row] = await pool.query('SELECT * FROM demo where id = ?',[id]);
        return row[0]
    }

const notes =await getRows();
console.log(notes);
const note= await getRow(3);
console.log(note);