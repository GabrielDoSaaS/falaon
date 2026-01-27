const MyAccount = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800">
            {/* Título Centralizado com Linha Laranja */}
            <div className="flex flex-col items-center mb-12 gap-3">
                <h1 className="text-3xl font-bold uppercase tracking-wider">
                    MINHA CONTA
                </h1>
                <div className="w-24 h-1 bg-orange-500"></div>
            </div>

            {/* Informações Pessoais e Foto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Informações Pessoais</h2>
                    <div><h3 className="font-medium text-gray-500">Nome público:</h3></div>
                    <div><h3 className="font-medium text-gray-500">Nome completo:</h3></div>
                    <div><h3 className="font-medium text-gray-500">CPF:</h3></div>
                    <div>
                        <h3 className="font-medium text-gray-500">E-mail:</h3>
                        {/* Estilização: Texto preto e link laranja */}
                        <p className="text-sm text-black mt-1">
                            Para mudar o e-mail registrado <a href="#" className="text-orange-500 underline hover:text-orange-600">Clique aqui</a>
                        </p>
                        <p className="text-sm text-black mt-1">
                            Para mudar informações pessoais <a href="#" className="text-orange-500 underline hover:text-orange-600">Clique aqui</a>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400">
                        <span className="text-xs text-center px-2">Coloque uma imagem para seu perfil</span>
                    </div>
                    <button className="text-sm bg-white border border-gray-300 px-4 py-2 rounded shadow-sm hover:bg-gray-50">
                        Upload Foto
                    </button>
                </div>
            </div>

            {/* Endereço */}
            <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Endereço</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 italic">CEP</h3>
                        <p className="py-1">00000-000</p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-3 gap-2">
                        <div className="italic text-sm text-gray-500">Rua</div>
                        <div className="italic text-sm text-gray-500">Número</div>
                        <div className="italic text-sm text-gray-500">Complemento</div>
                    </div>
                    <div className="md:col-span-3 grid grid-cols-3 gap-2">
                        <div className="italic text-sm text-gray-500">Bairro</div>
                        <div className="italic text-sm text-gray-500">Cidade</div>
                        <div className="italic text-sm text-gray-500">País</div>
                    </div>
                </div>
            </div>

            {/* Contatos */}
            <div className="flex flex-col space-y-8 mb-10">
                <section>
                    <h2 className="text-xl font-semibold mb-4">Telefone</h2>
                    <div className="flex gap-4">
                        <div className="w-1/4 italic text-sm text-gray-500">Código</div>
                        <div className="w-1/4 italic text-sm text-gray-500">DDD</div>
                        <div className="flex-1 italic text-sm text-gray-500">Número</div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">WhatsApp</h2>
                    <div className="flex gap-4">
                        <div className="w-1/4 italic text-sm text-gray-500">Código</div>
                        <div className="w-1/4 italic text-sm text-gray-500">DDD</div>
                        <div className="flex-1 italic text-sm text-gray-500">Número</div>
                    </div>
                </section>
            </div>

            {/* Privacidade e Segurança */}
            <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6">Privacidade e segurança</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    <div className="font-medium">Senha atual</div>
                    <div className="text-gray-500 italic">Coloque aqui sua senha atual</div>
                    
                    <div className="font-medium">Nova senha</div>
                    <div className="text-gray-500 italic">Defina aqui sua nova senha</div>
                    
                    <div className="font-medium">Confirmar senha</div>
                    <div className="text-gray-500 italic">e repita aqui a nova senha que está definida</div>
                </div>
                {/* Botão com bordas bem arredondadas (rounded-full) */}
                <button className="mt-6 bg-orange-500 text-white px-8 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
                    Alterar senha
                </button>
            </div>

            {/* Dispositivos Conectados */}
            <div className="mb-10">
                <h2 className="text-xl font-semibold mb-2">Dispositivos conectados</h2>
                <p className="text-gray-600">Desconecte todos os dispositivos conectados á sua conta na FalaON.</p>
            </div>

            {/* Encerramento de Conta */}
            <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                    <span className="font-bold text-gray-800 cursor-pointer hover:opacity-70 transition-opacity">
                        Encerrar sua conta
                    </span>
                    <span className="font-bold text-gray-800 cursor-pointer hover:opacity-70 transition-opacity">
                        Desativar conta temporáriamente
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;