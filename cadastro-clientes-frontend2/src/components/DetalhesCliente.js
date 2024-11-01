import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetalhesCliente = () => {
    const { id } = useParams(); // Obtém o ID do cliente da URL
    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/clientes/cadastro/${id}`);
                setCliente(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar detalhes do cliente:", error);
                setLoading(false);
            }
        };

        fetchCliente();
    }, [id]);

    if (loading) {
        return <div className="container mt-5 text-center"><p>Carregando...</p></div>;
    }

    if (!cliente) {
        return <div className="container mt-5 text-center"><p>Cliente não encontrado.</p></div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Detalhes do Cliente</h2>
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={`http://localhost:3000/uploads/${cliente.foto}`}
                            alt={cliente.nome_completo}
                            className="img-fluid rounded-start"
                            style={{ height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{cliente.nome_completo}</h5>
                            <p className="card-text"><strong>Email:</strong> {cliente.email}</p>
                            <p className="card-text"><strong>Telefone:</strong> {cliente.telefone}</p>
                            <p className="card-text"><strong>Endereço:</strong> {cliente.rua}, {cliente.numero_casa}, {cliente.bairro}</p>
                            <p className="card-text"><strong>Estado:</strong> {cliente.estado}</p>
                            <p className="card-text"><strong>Complemento:</strong> {cliente.complemento || 'N/A'}</p>
                            <p className="card-text"><small className="text-muted">ID do cliente: {cliente.id}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalhesCliente;
