import db from '../config/database.js';
import path from 'path';


export const cadastrarCliente = (req, res) => {
    const { nome_completo, email, telefone, rua, bairro, estado, numero_casa, complemento } = req.body;
    const foto = req.file ? req.file.filename : null;

    const sql = 'INSERT INTO clientes (nome, email, telefone, rua, bairro, estado, numero, complemento, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [nome_completo, email, telefone, rua, bairro, estado, numero_casa, complemento, foto];

    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.status(201).json({ message: 'Cliente cadastrado com sucesso!', clienteId: result.insertId });
    });
};

export const listarClientes = (req, res) => {
    db.query('SELECT * FROM clientes', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

export const detalheCliente = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM clientes WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};
