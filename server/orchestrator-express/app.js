const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000
const cors = require("cors");
const router = require("./router");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log("this app is running on port", PORT);
});
