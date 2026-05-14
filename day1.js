import express from "express";
// task 5
import dotenv from "dotenv/config";

// task 1
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

const users = [];

// task 2
app.get("/", (req, res) => {
  res.send("This is Day 1");
});

app.get("/student", (req, res) => {
  res.send("This is students page");
});
app.get("/course", (req, res) => {
  res.send("This is course page");
});

// task 3
app.post("/register", (req, res) => {
  const data = req.body;
  users.push(data);
  // task 4
  console.log(req.body);

  res.json({
    message: "Registration successful",
    data,
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}. http://localhost:${PORT}`);
});
