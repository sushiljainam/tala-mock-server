const express = require('express');
const { slice, map } = require('ramda');
const recJson = require('./json/testData.json');
const locJson = require('./json/locales.json');
const app = express();
const PORT = process.env.PORT;

recJson.forEach((rec, id) => recJson[id] = { id: 1 + id, ...rec });

app.get('/records', (req, res) => {
    console.log('q:', req.query);
    const pagesize = req.query?.pagesize || 3;
    const pageno = req.query?.pageno || 1;
    res.json(slice((pageno - 1) * pagesize, pagesize * pageno, recJson));
});

app.get('/locales', (req, res) => {
    // console.log(req.query);
    res.json(locJson);
});
// app.use(express.static('static'))

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
