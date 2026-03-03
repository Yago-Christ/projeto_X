import React, { useState } from 'react';

/**
 * Componente principal do convite digital
 * Contém toda a lógica de interação e exibição do convite
 */
const InviteCard = () => {
  // Estado para armazenar o nome do convidado
  const [nome, setNome] = useState('');
  
  // Estado para controlar a mensagem de confirmação
  const [mensagem, setMensagem] = useState('');

  /**
   * Manipula o clique no botão "Pagar com Pix"
   * Exibe QR code e informações de pagamento
   */
  const handlePagarPix = () => {
    if (nome.trim()) {
      setMensagem(`Escaneie o QR Code para pagar o ingresso de ${nome}`);
    } else {
      setMensagem('Por favor, digite seu nome antes de pagar');
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Card principal com efeito de vidro fosco */}
      <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-8">
        <div className="text-center space-y-6">
          {/* Texto pequeno superior */}
          <p className="text-zinc-400 text-sm tracking-widest uppercase">
            VOCÊ FOI CONVIDADO PARA
          </p>

          {/* Título principal */}
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
            PROJETO X 1.0
          </h1>

          {/* Subtítulo */}
          <h2 className="text-zinc-300 text-xl md:text-2xl font-medium tracking-wide">
            Festa de 18 anos
          </h2>

          {/* Texto informativo */}
          <div className="text-zinc-400 text-sm space-y-2 text-left bg-zinc-800/30 rounded-lg p-4">
            <p className="tracking-wide">
              <span className="text-zinc-300 font-medium">Local:</span> Brooklyn
            </p>
            <p className="tracking-wide">
              <span className="text-zinc-300 font-medium">Bebidas liberadas</span>
            </p>
            <p className="tracking-wide">
              <span className="text-zinc-300 font-medium">Musica:</span> DJ Maickel Eckert
            </p>
            <p className="tracking-wide">
              <span className="text-zinc-300 font-medium">Horário:</span> 23:30 até de manhã
            </p>
            <p className="tracking-wide text-center font-medium text-zinc-200">
              Antecipe a sua entrada!
            </p>
          </div>

          {/* Input para nome do convidado */}
          <div className="space-y-2">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Botão de pagamento Pix */}
          <div className="space-y-4">
            <button
              onClick={handlePagarPix}
              className="w-full py-3 px-6 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
              <span>Pagar com Pix</span>
            </button>
            
            {/* QR Code - sempre visível */}
            <div className="bg-white p-4 rounded-lg border-2 border-zinc-600">
              <img 
                src="/qrcode.png" 
                alt="QR Code para pagamento Pix" 
                className="w-32 h-32 mx-auto rounded"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MCA0MEg4OFY4OEg0MFY0MFoiIGZpbGw9IiMxMjEyMTIiLz4KPHA+UVIgQ29kZTwvcD4KPHRzcGFuIHg9IjQ0IiB5PSI3MCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiPkNvZGU8L3RzcGFuPgo8L3N2Zz4=';
                }}
              />
              <p className="text-xs text-gray-600 text-center mt-2">Escaneie para pagar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mensagem de confirmação (exibida abaixo do card) */}
      {mensagem && (
        <div className="mt-6 p-4 bg-zinc-800/60 border border-zinc-700 rounded-lg backdrop-blur-md">
          <p className="text-zinc-300 text-center tracking-wide">
            {mensagem}
          </p>
        </div>
      )}
    </div>
  );
};

export default InviteCard;
