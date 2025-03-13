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

app.get('/docs', (req, res) => {
    res.setHeader("Set-Cookie", [
        "path_test = sabbir; Max-Age=3600; path=/docs"
    ])
    res.send(`cookies recieved= ${req.headers.cookie}`);
});
app.get('/dev', (req, res) => {
    
    res.send(`cookies recieved= ${req.headers.cookie}`);
})

app.get('/docs/test', (req, res) => {
    res.send(`cookies recieved= ${req.headers.cookie}`);
})

app.get('/same-site-default', (req, res) => {
    res.setHeader("Set-Cookie", [
        "ssd = default; Max-Age=3600;"
    ])
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
