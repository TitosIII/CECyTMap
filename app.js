import express from "express";
import bodyParser from "body-parser";
import http from "http";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.sendFile("/public/index.html" , {root:"."});
})

const Server = http.Server(app);
const port = process.env.PORT || 3000;

Server.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}.`);
});