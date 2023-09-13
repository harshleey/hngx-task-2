const express = require("express");
const User = require("./model/PersonModel");
const connectDB = require("./config/database");
const app = express();
const personRoute = require("./routes/person");
const mainRoute = require("./routes/main");
//Use .env file
require("dotenv").config({ path: "./config/.env" });

// Middleware to parse JSON data from the request body
app.use(express.json());

const PORT = process.env.PORT;

// Connect to database
connectDB();

app.use("/api", mainRoute);
app.use("/api/persons", personRoute);

app.listen(PORT, () => {
  console.log(`Server is running away on port ${PORT}`);
});
