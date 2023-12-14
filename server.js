const express = require('express');
const path = require('path');
const app = express();
const port = 4091;

// Configurar CSP Headers
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'"); // Adapte conforme necessário
    next();
});


app.use(express.static(path.join(__dirname, 'index.html', 'public')));

// Rota para o primeiro index.html
app.get('/index.html', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'pagina', 'public') });
});

// Rota para o segundo index.html
app.get('/index1.html', (req, res) => {
    res.sendFile('index1.html', { root: path.join(__dirname, 'pagina', 'public') });
});

// Rota para o terceiro index.html
app.get('/index2.html', (req, res) => {
    res.sendFile('index2.html', { root: path.join(__dirname, 'pagina', 'public') });
});

// Rota para o arquivo CSS
app.get('/styles3.css', (req, res) => {
    res.sendFile('styles3.css', { root: path.join(__dirname, 'pagina', 'public') });
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
