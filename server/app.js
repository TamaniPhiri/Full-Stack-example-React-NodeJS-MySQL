import express  from "express";
import cors from "cors";
import { getUser,createUser,getUsers } from "./database.js";

const app = express();

app.use(express());
app.use(cors());

app.get('/users', async(req, res) => {
    const users= await getUsers();
    res.send(users);
})

app.get('/users/:id', async(req, res) => {
    const id=req.params.id;
    const user=await getUser(id);
    res.send(user);
})

app.listen(8080,() => {
    console.log("Server listening on port http://localhost:8080");
});