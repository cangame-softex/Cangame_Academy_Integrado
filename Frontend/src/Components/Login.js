import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Para fazer requisições HTTP
import { useState } from 'react'; // Hook do React para gerenciar estado
import Logo from './logo-cangame.png'; // Importa a imagem do logo
import CarrosselPremios from './CarrosselPremios'; // Componente de carrossel
import InputLogin from './InputLogin'; // Componente personalizado para input

// Componente funcional 'Login'
function Login() {
    // Estados locais para gerenciar informações de login e do usuário
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

    // Função para lidar com o processo de login
    const handleLogin = async (evento) => {
        evento.preventDefault(); // Previne o recarregamento padrão da página ao enviar o formulário

        try {
            // Requisição POST para o endpoint de login com email e senha
            const response = await axios.post(
                'http://localhost:3001/login',
                JSON.stringify({ email: email, password: senha }),
                { headers: { 'Content-Type': 'application/json' }}
            );
  
            // Desestruturação para obter dados do usuário e token da resposta
            const { user, token } = response.data;
            localStorage.setItem('token', token); // Armazenamento do token no localStorage
  
            setUsuario(user); // Atualiza o estado do usuário com os dados recebidos
            navigate('/home'); // Redireciona para a página inicial
        } catch (error) {
            // Gerenciamento de diferentes tipos de erros na requisição
            if (!error?.response) {
                setError('Erro ao acessar o servidor');
            } else if (error.response?.status === 401) {
                setError('Usuário ou senha inválidos');
            } else {
                setError('Erro no login');
            }
        }
    };

    return (
        <div className='login-Container'>
            <div className='login-Image'>
                {/* Imagem do logo e informações da empresa */}
                <div className='img_Logo'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='nome-empresa'>
                    <span className='bold'>can</span>
                    <span className='light'>game</span>
                </div>
                <div className='palavra-edu'>
                    <span className='edu-letra'>e</span>
                    <span className='edu-letra'>d</span>
                    <span className='edu-letra'>u</span>
                </div>
                {/* Carrossel de prêmios */}
                <div className='carrossel_Container'>
                    <CarrosselPremios />
                </div>
            </div>
            <div className='login-Formulario'>
                <h2 className='h2_bem-vindo'>Bem-vindo ao CanGame edu</h2>
                <form className='input_Container'>
                    <InputLogin 
                        type="text"
                        name="email"
                        label="Digite seu e-mail"
                        value={email}
                        onChange={(evento) => setEmail(evento.target.value)}
                        onFocus={() => setError('')}
                    />            
                    <InputLogin 
                        type="password"
                        name="senha"
                        label="Digite sua senha"
                        value={senha}
                        onChange={(evento) => setSenha(evento.target.value)}
                        onFocus={() => setError('')}
                    />
                    <p className='mensagem_Erro'>{error}</p>
                    <button type='submit' className='btn-login'
                            disabled={!email.trim() || !senha.trim()}
                            onClick={(evento) => handleLogin(evento)}>LOGIN</button>
                </form>
            </div>
        </div>
    );
}
export default Login; // Exporta o componente Login para ser utilizado em outras partes do aplicativo