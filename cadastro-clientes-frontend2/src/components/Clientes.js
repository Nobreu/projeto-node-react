import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        
        // Fetch lista de clientes ao carregar o componente
        const fetchClientes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/clientes/cadastros');
                setClientes(response.data);
            } catch (error) {
                console.error("Erro ao buscar clientes:", error);
            }
        };
        fetchClientes();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Lista de Clientes</h2>
            <div className="row">
                {clientes.map((cliente) => (
                    <div className="col-md-4 mb-4" key={cliente.id}>
                        <div className="card">
                            <img
                                src={`http://localhost:3000/uploads/${cliente.foto}`}
                                alt={cliente.nome_completo}
                                className="card-img-top"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{cliente.nome_completo}</h5>
                                <p className="card-text">Email: {cliente.email}</p>
                                <p className="card-text">Telefone: {cliente.telefone}</p>
                                <Link to={`/cadastro/${cliente.id}`} className="btn btn-primary">
                                    Ver detalhes
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clientes;
