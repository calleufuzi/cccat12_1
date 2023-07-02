import express from "express";
import api from "./api";

const app = express();

app.use(express.json());
app.get("/ping", (req, res) => {
    res.send("pong")
});

app.use("/", api)
app.listen(3000);