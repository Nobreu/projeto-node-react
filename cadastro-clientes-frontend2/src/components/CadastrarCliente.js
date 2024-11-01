import React, { useState } from 'react';
import axios from 'axios';

const CadastrarCliente = () => {
    const [cliente, setCliente] = useState({
        nome_completo: '',
        email: '',
        telefone: '',
        rua: '',
        bairro: '',
        estado: '',
        numero_casa: '',
        complemento: '',
    });
    const [foto, setFoto] = useState(null);

    const estados = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
        "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
        "SP", "SE", "TO"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleFileChange = (e) => {
        setFoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(cliente).forEach((key) => formData.append(key, cliente[key]));
        if (foto) formData.append('foto', foto);

        try {
            const response = await axios.post('http://localhost:3000/api/clientes/cadastrar', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert(response.data.message);
        } catch (error) {
            console.error("Erro ao cadastrar cliente:", error);
            alert("Erro ao cadastrar cliente");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Cadastro de Cliente</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Nome Completo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nome_completo"
                        value={cliente.nome_completo}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={cliente.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Telefone</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="telefone"
                        value={cliente.telefone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Rua</label>
                    <input
                        type="text"
                        className="form-control"
                        name="rua"
                        value={cliente.rua}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Bairro</label>
                    <input
                        type="text"
                        className="form-control"
                        name="bairro"
                        value={cliente.bairro}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <select
                        className="form-select"
                        name="estado"
                        value={cliente.estado}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Selecione o Estado</option>
                        {estados.map((estado) => (
                            <option key={estado} value={estado}>{estado}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Número da Casa</label>
                    <input
                        type="text"
                        className="form-control"
                        name="numero_casa"
                        value={cliente.numero_casa}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Complemento</label>
                    <input
                        type="text"
                        className="form-control"
                        name="complemento"
                        value={cliente.complemento}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Foto</label>
                    <input
                        type="file"
                        className="form-control"
                        name="foto"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastrarCliente;
