const express = require("express");
const urlRoute = require("./routes/url")
const { connectToMongoDB } = require("./connect");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
    console.log("MongoDB connected!")
})

app.use("/",urlRoute);

app.listen(PORT,()=>{
    console.log(`Server is connected on PORT: ${PORT}`)
})