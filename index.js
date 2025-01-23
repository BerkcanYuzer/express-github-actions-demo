import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World from Express.js!');
});

app.listen(port, () => {
    console.log(`Uygulama http://localhost:${port} adresinde çalışıyor`);
});