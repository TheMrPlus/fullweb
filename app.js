const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/master', (req,res) -> {
	res.sent('X-full-stack', '4life');
	res.status(418);
	res.send('Santiago Sarabia Young God');
});
