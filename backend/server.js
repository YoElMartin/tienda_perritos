const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'admin123',
  database: 'tienda_perritos'
});

app.get('/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(3001, () => console.log('Backend en puerto 3001'));
