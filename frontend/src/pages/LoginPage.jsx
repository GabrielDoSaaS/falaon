import logo from '../assets/logo.png';
import imageFooter from '../assets/imagem rodapé.png';
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
        <div className="min-h-screen w-screen text-white flex flex-col items-center justify-center gap-5 relative px-4 py-8">
            {/* Bloco do título "Cadastro" e botão "Voltar" */}
            <div className="w-full flex justify-center items-center mb-20 md:mb-[150px] lg:mb-[200px] relative">
                <div className="flex items-center gap-3 relative">
                    <h1 className="text-3xl sm:text-4xl text-black relative">Login</h1>
                    {/* Linha laranja */}
                    <div className="absolute -bottom-3 w-16 h-1 bg-orange-500 rounded-md left-1/2 -translate-x-1/2"></div>
                </div>
                {/* Botão "Voltar" posicionado à direita */}
                <div className="absolute right-0 md:right-5 flex items-center gap-1 cursor-pointer">
                    <img src={backIcon} alt="Voltar" className="w-12 h-12 md:w-16 md:h-16" />
                    <span className="text-black text-lg md:text-xl hidden sm:inline">Voltar</span>
                </div>
            </div>

            {/* Container relativo para posicionar a logo em relação à div preta */}
            <div className="relative w-full max-w-md md:max-w-lg">
                {/* Div preta (card) */}
                <div className="bg-black flex flex-col gap-3 p-5 rounded-3xl w-full h-auto min-h-[350px] relative justify-center">
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

                    {/* Checkbox e Texto de Declaração */}

                    <button className="text-white bg-orange-500 p-2 rounded-lg mt-4" onClick={()=>handleRegister()}>Confirmar</button>
                </div>

                {/* Logo posicionada em relação à div preta - visível apenas em telas médias e grandes */}
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute -left-16 bottom-8 w-24 h-auto object-cover md:-left-28 md:w-32 lg:-left-32 hidden md:block"
                />
            </div>

            {/* Imagem do rodapé com largura total */}
            <footer className="absolute bottom-0 w-full">
                <img src={imageFooter} alt="Rodapé" className="w-full h-auto object-cover"/>
            </footer>
        </div>
    )
}

export default LoginPage;