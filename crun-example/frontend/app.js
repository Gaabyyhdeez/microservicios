// app.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 8081;

// Reemplaza 'BACKEND_URL' con la URL real del backend
const backendUrl = 'https://backend-xqwtvnmaqq-uc.a.run.app/data';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(backendUrl);
    res.send(`
      <html>
        <body>
          <h1>Datos de BigQuery</h1>
          <pre>${JSON.stringify(response.data, null, 2)}</pre>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send('Error al recuperar los datos: ' + error);
  }
});

app.listen(port, () => {
  console.log(`Frontend app listening at http://localhost:${port}`);
});
