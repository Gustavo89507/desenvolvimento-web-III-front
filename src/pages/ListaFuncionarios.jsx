import { Link } from 'react-router'
import Funcionarios from './Funcionarios'
function ListaFuncionarios() {
 const funcionarios = [
 {
 id: 1,
 nome: 'Sirley',
 cpf: '1234458901',
 email: 'Sirley@email.com',
 cnpj:'127643587216',
 },
 {
 id: 2,
 nome: 'Welligton',
 cpf: '234554237982',
 email: 'Welligton@email.com',
 cnpj:'5703847485',
 },
 {
id: 3,
 nome: 'Danilo',
 cpf: '34569870123',
 email: 'Danilo@email.com',
 cnpj:'45783759465',
 },
 ]
 return (
 <main className="pagina-funcionarios">
 <h1>Lista de Funcionarios</h1>
 <ul className="lista-funcionarios">
 {Funcionarios.map((Funcionario) => (
 <li key={Funcionario.id}>
 <strong>{Funcionario.nome}</strong>
 <span>CPF: {Funcionario.cpf}</span>
 <span>E-mail: {Funcionario.email}</span>
 <span>CNPJ: {Funcionario.cnpj}</span>
 </li>
 ))}
 </ul>
 <Link to="/funcionarios">Voltar para Gerenciamento de Funcionarios</Link>
 </main>
 )
}
export default ListaFuncionarios