const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

//ROUTES
const postsRoute = require("./route/posts");
app.use("/posts",postsRoute);


app.get("/",(req,res) => {
    res.send("test");
});

app.listen(process.env.PORT, () => {
    console.log("Server ON");
});
