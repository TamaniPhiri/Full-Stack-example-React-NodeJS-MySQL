import express  from "express";
import cors from "cors";

const app = express();

app.use(express());
app.use(cors());

app.get('/users', (req, res) => {
    res.send("Users Page");
})

app.listen(8080,() => {
    console.log("Server listening on port 8080");
});