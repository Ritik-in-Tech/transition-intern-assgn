const express = require("express");
const userRoutes = require("./routes/userRoutes");
const { swaggerUi, specs } = require("./config/swaggerconfig");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();

const uri = `mongodb+srv://admin:${process.env.MONGODB_PASS}@software1.gptczdh.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority&appName=software1`;
mongoose
  .connect(uri, {})
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs)); // Setup Swagger UI
app.use("/api", userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Your project is listening on port ${process.env.PORT || 3000}`);
});

app.get("/", (req, res) => {
  res.json({ message: "welcome to transition Computing India api" });
});
