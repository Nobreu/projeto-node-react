import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastrarCliente from './components/CadastrarCliente';
import Clientes from './components/Clientes';
import DetalhesCliente from './components/DetalhesCliente';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="/cadastrar" element={<CadastrarCliente />} />
        <Route path="/cadastro/:id" element={<DetalhesCliente />} />
      </Routes>
    </Router>
  );
}

export default App;
