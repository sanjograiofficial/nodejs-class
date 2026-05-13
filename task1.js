import express from "express";
import dotenv from "dotenv/config";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Iphone",
    price: 200000,
  },
  {
    id: 3,
    name: "Refrigerator",
    price: 100000,
  },
];

// task 1
app.get("/", (req, res) => {
  res.send("This is Day 2");
});

app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((item) => item.id == productId);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});
app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  const resData = {
    message: "Product created",
    newProduct,
  };
  res.json(resData);
});
app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const updateData = req.body;
  const product = products.find((item) => item.id == productId);
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  product.name = updateData.name;
  product.price = updateData.price;
  res.json({
    message: "Product successfully updated",
    product,
  });
});
app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  const productIndex = products.findIndex((item) => item.id == productId);
  if (productIndex == -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  products.splice(productIndex, 1);
  res.json({
    message: "Product deleted successfully",
  });
});

//task 2
const users = [
  {
    id: 1,
    name: "Ram",
    email: "ram@gmail.com",
  },
  {
    id: 2,
    name: "Hari",
    email: "hari@gmail.com",
  },
];

// task 3
app.get("/search", (req, res) => {
    // task 4
  if (!req.query.name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }
  const searchedUser = req.query.name;
  const user = users.find((item) => item.name == searchedUser);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.json({
    user,
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}. http://localhost:${PORT}`);
});
