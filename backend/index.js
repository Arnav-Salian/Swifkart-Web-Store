const express = require("express");
const cors = require("cors");
const products = require("./products");

const app = express();

// Define allowed origins directly in the code
const allowedOrigins = ['https://swifkart.vercel.app'];

// Middleware
app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
}));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Swifkart API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start Server
const port = 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
