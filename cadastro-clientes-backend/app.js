require('dotenv').config();
const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clientes');
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

app.use('/api/clientes', clienteRoutes);

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL.');
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
