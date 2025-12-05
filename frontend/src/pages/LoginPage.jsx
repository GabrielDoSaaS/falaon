import logo from '../assets/logo.png';
import imageFooter from '../assets/faixa horizontal 2.png';
import backIcon from '../assets/back.png'
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleRegister = async () => {
        if (!termsAccepted) {
            alert('Você deve aceitar os termos de uso para continuar.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/register', {
                email,
                password
            });
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        // MUDANÇA 1: h-screen (trava altura) e overflow-hidden (remove scroll)
        <div className="h-screen w-screen text-white flex flex-col items-center justify-start md:justify-center gap-5 relative px-4 py-8 pt-10 md:pt-8 overflow-hidden">
            
            {/* Bloco do título "Login" e botão "Voltar" */}
            {/* MUDANÇA 2: Reduzi drasticamente a margem inferior (mb-8 em vez de mb-20) para subir o formulário */}
            <div className="w-full flex justify-center items-center mb-8 md:mb-[150px] lg:mb-[200px] relative shrink-0">
                <div className="flex items-center gap-3 relative">
                    <h1 className="text-3xl sm:text-4xl text-black relative">Login</h1>
                    <div className="absolute -bottom-6 w-16 h-1 bg-orange-500 rounded-md left-1/2 -translate-x-1/2"></div>
                </div>
                
                <div className="absolute right-0 md:right-5 flex items-center gap-1 cursor-pointer mb-12">
                    <img src={backIcon} alt="Voltar" className="w-12 h-12 md:w-16 md:h-16 " />
                    <span className="text-black text-lg md:text-xl hidden sm:inline">Voltar</span>
                </div>
            </div>

            {/* Container do formulário */}
            {/* MUDANÇA 3: Adicionei z-10 para garantir que o formulário fique por cima da faixa se a tela for muito pequena */}
            <div className="relative w-full max-w-md md:max-w-lg z-10">
                <div className="bg-black flex flex-col gap-3 p-5 rounded-3xl w-full h-auto min-h-[350px] relative justify-center shadow-lg">
                    <input 
                        type="text" 
                        placeholder="E-mail: " 
                        className="bg-white p-2 text-black rounded-3xl mb-4 md:mb-8"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha: " 
                        className="bg-white p-2 text-black rounded-3xl mb-4"
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button className="text-white bg-orange-500 p-2 rounded-lg mt-4" onClick={()=>handleRegister()}>Confirmar</button>
                </div>

                <img
                    src={logo}
                    alt="Logo"
                    className="absolute -left-48 bottom-8 w-36 h-auto object-cover md:-left-56 md:w-48 lg:-left-72 hidden md:block"
                />
            </div>

            {/* Rodapé */}
            <footer className="absolute bottom-0 w-full z-0">
                {/* A imagem vai se ajustar à largura, ficando fixa no fundo */}
                <img src={imageFooter} alt="Rodapé" className="w-full h-auto object-cover max-h-[15vh] md:max-h-none" />
            </footer>
        </div>
    )
}

export default LoginPage;