// app.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://backend-service:8080/data');
        res.send(`
            <html>
                <body>
                    <h1>Datos de BigQuery</h1>
                    <pre>${JSON.stringify(response.data, null, 2)}</pre>
                </body>
            </html>
        `);
    } catch (error) {
        res.status(500).send('Error al recuperar los datos');
    }
});

app.listen(port, () => {
    console.log(`Frontend app listening at http://localhost:${port}`);
});
