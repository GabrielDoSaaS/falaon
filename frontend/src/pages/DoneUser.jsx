import React from 'react';
import footerImage from '../assets/imagem rodapé.png'; // Renomeei para evitar conflito com o nome da função

const DoneUser = () => {
  // 1. Crie a função que irá mostrar o alerta
  const handleCadastro = () => {
    alert('Cadastro concluído com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Conteúdo principal do formulário */}
      <div className="p-4 flex-grow">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl mx-auto">
          <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">CADASTRO</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Seção de Informações Pessoais */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">Informações pessoais</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="nomeSocial" className="block text-sm font-medium text-gray-600">Nome social (Público)</label>
                  <input
                    type="text"
                    id="nomeSocial"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-600">Nome completo (igual o do documento de identidade)</label>
                  <input
                    type="text"
                    id="nomeCompleto"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-600">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Seção de Observações */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">Observações</h2>
              <p className="text-gray-600 text-sm mb-2">
                Somente será visível para os outros usuários o seu nome social (Público).
              </p>
              <p className="text-gray-600 text-sm">
                Colocar o CPF é opcional, no entanto, quem colocar e se for confirmado a autenticidade do mesmo receberá selo no perfil de verificado.
              </p>
            </div>
          </div>

          {/* Seção de Endereço */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">Endereço</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label htmlFor="cep" className="block text-sm font-medium text-gray-600">CEP</label>
                <input type="text" id="cep" placeholder="CEP" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="rua" className="block text-sm font-medium text-gray-600">Rua</label>
                <input type="text" id="rua" placeholder="Rua" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="numero" className="block text-sm font-medium text-gray-600">Número</label>
                <input type="text" id="numero" placeholder="Número" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="complemento" className="block text-sm font-medium text-gray-600">Complemento</label>
                <input type="text" id="complemento" placeholder="Complemento" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="bairro" className="block text-sm font-medium text-gray-600">Bairro</label>
                <input type="text" id="bairro" placeholder="Bairro" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="cidade" className="block text-sm font-medium text-gray-600">Cidade</label>
                <input type="text" id="cidade" placeholder="Cidade" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="pais" className="block text-sm font-medium text-gray-600">País</label>
                <input type="text" id="pais" placeholder="País" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>

          {/* Seção de Telefone */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">Telefone</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="codPaisTel" className="block text-sm font-medium text-gray-600">Código do país</label>
                <input type="text" id="codPaisTel" placeholder="Código do país" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="dddTel" className="block text-sm font-medium text-gray-600">DDD</label>
                <input type="text" id="dddTel" placeholder="DDD" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="numeroTel" className="block text-sm font-medium text-gray-600">Número</label>
                <input type="text" id="numeroTel" placeholder="Número" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>

          {/* Seção de WhatsApp */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">WhatsApp</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="codPaisWp" className="block text-sm font-medium text-gray-600">Código do país</label>
                <input type="text" id="codPaisWp" placeholder="Código do país" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="dddWp" className="block text-sm font-medium text-gray-600">DDD</label>
                <input type="text" id="dddWp" placeholder="DDD" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="numeroWp" className="block text-sm font-medium text-gray-600">Número</label>
                <input type="text" id="numeroWp" placeholder="Número" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>

          {/* Checkbox e Botão */}
          <div className="mt-8 flex items-center">
            <input
              id="novidades"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="novidades" className="ml-2 block text-sm text-gray-700">
              Quero receber novidades, ofertas e aulas gratuitas por e-mail
            </label>
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              // 2. Adicione a função 'handleCadastro' ao evento onClick
              onClick={handleCadastro} 
              className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              CADASTRAR
            </button>
          </div>
        </div>
      </div>

      {/* Footer com a imagem */}
      <footer className="bg-cover bg-center" style={{ backgroundImage: `url(${footerImage})`, height: '100px' }}>
        {/* Você pode adicionar conteúdo adicional aqui se necessário */}
      </footer>
    </div>
  );
};

export default DoneUser;