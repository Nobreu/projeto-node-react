import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import clienteRoutes from './routes/clientes.js';
import db from './config/database.js';

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
