const express = require('express');
const { dirname } = require('path');
const app = express();
const port = 3000;
const path = require("path")
app.use(express.static(path.join(__dirname, '../public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/html/homePage.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
