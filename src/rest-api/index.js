import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
	.connect('mongodb+srv://admin:qwerty123456@cluster0.i3rl2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
	.then(() => console.log('DB connect'))
	.catch((err) => console.log('DB error'));

const app = express();

app.use(express.json());

//res - ответ пользователю

app.get('/', (req, res) => {
	res.send('Hello world new');
});

app.post('/auth/login', (req, res) => {
	console.log(req.body, 'req.body');

	//Создаем токен
	const token = jwt.sign(
		{
			email: req.body.email,
			fullName: 'Вася Пупкин',
		},
		'randominfo', //здесь рандомная информация
	);

	res.json({
		success: true,
		token,
	});
});

app.listen(4444, (err) => {
	if (err) {
		return console.log(err);
	} else {
		console.log('Ok');
	}
});
