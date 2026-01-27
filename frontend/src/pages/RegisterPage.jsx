import logo from '../assets/logo.png';
import backIcon from '../assets/back.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    // Remove qualquer scroll do body
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    const handleRegister = async () => {
        if (!termsAccepted) {
            alert('Você deve aceitar os termos de uso para continuar.');
            return;
        }

        try {
            const response = await axios.post('https://falaon.onrender.com/api/register', {
                email,
                password
            });
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        <div className="min-h-screen w-screen text-white flex flex-col items-center justify-start md:justify-center gap-5 relative px-4 py-8 pt-12 md:pt-8 overflow-hidden">

<<<<<<< HEAD
            {/* Cabeçalho / Botão Voltar */}
=======
>>>>>>> e7f3afe49e9594de4c896002119a5c16db356d12
            <div className="w-full flex items-center justify-center mb-20 md:mb-[150px] lg:mb-[200px] relative">
                <div className="absolute right-0 flex items-center gap-1 cursor-pointer mb-12">
                    <img src={backIcon} alt="Voltar" className="w-12 h-12 md:w-16 md:h-16" />
                    <span className="text-black text-lg md:text-xl hidden sm:inline">Voltar</span>
                </div>

                <div className="flex items-center gap-3 relative">
                    <h1 className="text-3xl sm:text-4xl text-black relative">Cadastro</h1>
<<<<<<< HEAD
=======

>>>>>>> e7f3afe49e9594de4c896002119a5c16db356d12
                    <div className="absolute -bottom-6 w-16 h-1 bg-orange-500 rounded-md left-1/2 -translate-x-1/2"></div>
                </div>
            </div>

<<<<<<< HEAD
            {/* Container do Formulário */}
            <div className="relative w-full max-w-md md:max-w-lg">
                {/* Alterado de rounded-t-3xl para rounded-3xl para arredondar embaixo também */}
                <div className="bg-black flex flex-col gap-3 p-5 rounded-3xl w-full h-auto min-h-[350px] relative justify-center shadow-xl">
=======
            <div className="relative w-full max-w-md md:max-w-lg">
                {/* ALTERAÇÃO AQUI: 
                   'rounded-3xl' para telas pequenas (arredonda tudo).
                   'md:rounded-t-3xl' restaura o padrão original (só em cima) para telas médias/grandes.
                */}
                <div className="bg-black flex flex-col gap-3 p-5 rounded-3xl md:rounded-t-3xl w-full h-auto min-h-[350px] relative justify-center">
>>>>>>> e7f3afe49e9594de4c896002119a5c16db356d12
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

                    <div className="flex items-start gap-2 mt-2">
                        <input 
                            type="checkbox" 
                            id="terms" 
                            className="w-4 h-4 mt-1 flex-shrink-0"
                            onChange={(e)=>{setTermsAccepted(e.target.checked)}}
                        />
                        <label htmlFor="terms" className="text-xs sm:text-sm text-white">
<<<<<<< HEAD
                            Ao clicar aqui, declaro que li, aceito e concordo com os <span className="text-orange-500 underline">Termos de Uso e Políticas da falaON</span> e que tenho mais de 18 anos.
=======
                            Ao clicar aqui, declaro que li, aceito e concordo com os <span className="text-orange-500 underline">Termos de Uso e Políticas da falaON</span> e que tenho mais de 18 anos .
>>>>>>> e7f3afe49e9594de4c896002119a5c16db356d12
                        </label>
                    </div>

                    <button 
<<<<<<< HEAD
                        className="text-white bg-orange-500 mb-4 p-2 rounded-lg mt-4 hover:bg-orange-600 transition-colors" 
=======
                        className="text-white bg-orange-500 mb-4 p-2 rounded-lg mt-4" 
>>>>>>> e7f3afe49e9594de4c896002119a5c16db356d12
                        onClick={handleRegister}
                    >
                        Confirmar
                    </button>
                </div>

<<<<<<< HEAD
                {/* Logo Flutuante (Desktop) */}
=======
>>>>>>> e7f3afe49e9594de4c896002119a5c16db356d12
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute -left-40 bottom-8 w-36 h-auto object-cover md:-left-48 md:w-48 lg:-left-60 hidden md:block"
                />
            </div>
<<<<<<< HEAD
=======

            <footer className="absolute bottom-0 w-full">
                {/* ALTERAÇÃO AQUI: 
                   'h-36' deixa a faixa mais alta no mobile (era h-24).
                   'md:h-auto' garante que no desktop ela mantenha o tamanho original.
                */}
                <img src={imageFooter} alt="Rodapé" className="w-full h-36 md:h-auto object-cover" />
            </footer>
>>>>>>> e7f3afe49e9594de4c896002119a5c16db356d12
        </div>
    )
}

export default RegisterPage;