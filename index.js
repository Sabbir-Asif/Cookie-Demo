const express = require("express");
const cors = require("cors");
const path = require("path");

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.setHeader("Set-Cookie", [
        "user_name=sabbir-hosen; Max-Age=3600; SameSite=None; Secure"
    ])
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
