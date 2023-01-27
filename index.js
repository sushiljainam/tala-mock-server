const express = require('express');
const recJson = require('json/testData.json');
const app = express();
const PORT = process.env.PORT;

app.get('/records', (req, res) => {
    // console.log(req.query);
    res.json(recJson.slice(0, Math.floor(Math.random() * (recJson.length))));
});
// app.use(express.static('static'))

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
