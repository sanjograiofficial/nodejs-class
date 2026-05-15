import dotenv from "dotenv";
import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "./controllers/userhandler.js";

dotenv.config();

const app = express();
app.use(express.json());

let PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello this is home page");
});

app.get('/users', getAllUsers)
app.get('/users/:id', getUserById)
app.post('/users', createUser)
app.put('/users', updateUser)
app.delete('/users', deleteUser)

app.listen(PORT, () => {
  console.log(
    `The server is running in port ${PORT}. http://localhost:${PORT}/`,
  );
});
