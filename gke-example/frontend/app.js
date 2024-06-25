// app.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 8081;

app.get('/', async (req, res) => {
    try {
        //const response = await axios.get('http://backend-service:8080/data');
        const response = await axios.get('http://127.0.0.1:8080/data');
        res.send(`
            <html>
                <body>
                    <h1>Datos de BigQuery</h1>
                    <pre>${JSON.stringify(response.data, null, 2)}</pre>
                </body>
            </html>
        `);
    } catch (error) {
        res.status(500).send('Error al recuperar los datos' + error);
    }
});

app.listen(port, () => {
    console.log(`Frontend app listening at http://localhost:${port}`);
});
