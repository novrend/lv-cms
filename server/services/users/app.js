const express = require("express");
const { mongodb } = require("./config/mongo");
const app = express();
const PORT = process.env.PORT || 4001;
const router = require("./router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

mongodb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("this app is running on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
