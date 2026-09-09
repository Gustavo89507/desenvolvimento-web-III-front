import { Link } from 'react-router'
function Funcionarios() {
 return (
 <div className="pagina-clientes">
 <h1>Gerenciamento de Funcionarios</h1>
 <p>Escolha uma das opções:</p>
 <div className="opcoes-clientes">
 <Link to="/Funcionarios/listar">
 Listar Funcionarios
 </Link>
 <Link to="/Funcionarios/cadastrar">
 Cadastrar novo Funcionario
 </Link>
 </div>
 <Link to="/">
 Voltar para a página inicial
 </Link>
 </div>
 )
}
export default Funcionarios