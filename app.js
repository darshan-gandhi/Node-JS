var express = require("express");
var app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
    data = {
        name: "Darshan",
        age:"22",
        hobbies:['keyboard','cricket','photography']
    }
    res.json(data);
});

app.listen(3000);