import express from 'express';
const app = express();

app.use(express.json());

//res - ответ пользователю

app.get('/', (req, res) => {
	res.send('Hello world new');
});

app.post('/auth/login', (req, res) => {
	console.log(req.body, 'req.body');

	res.json({
		success: true,
	});
});

app.listen(4444, (err) => {
	if (err) {
		return console.log(err);
	} else {
		console.log('Ok');
	}
});
