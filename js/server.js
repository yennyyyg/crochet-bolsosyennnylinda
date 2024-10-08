const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Usuario de ejemplo
const usuario = { username: 'admin', password: 'admin123' };

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === usuario.username && password === usuario.password) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
