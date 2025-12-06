import express from "express";

const app = express();

app.use(express.static("../Client"));


app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});


