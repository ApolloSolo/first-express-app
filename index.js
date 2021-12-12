const express = require('express');
const app = express();

app.use(() => {
    console.log("A request was just made!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
});