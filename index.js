const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("A request was just made!");
//     res.send("Hello, we recieved your request!")
// });

app.get('/', (req, res) => {
    res.send("https://google.com");
});

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>This is the ${subreddit} subreddit.</h1>`);
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const {subreddit, postID} = req.params;
    res.send(`<h1>Viewing ${postID} on the ${subreddit} subreddit.</h1>`);
})

app.get('/cats', (req, res) => {
    console.log('Cats page requested');
    res.send("Meow");
});

app.get('/dogs', (req, res) => {
    res.send("BARK");
});

app.get('*', (req, res) => {
    res.send("Do not know that request.")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
});