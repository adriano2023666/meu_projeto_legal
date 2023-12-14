const express = require("express");
const app = express();
const port = 4091;

// Configurar CSP Headers
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'"); // Adapte conforme necessário
  next();
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
