import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Componente do painel administrativo
 * Exibe estatísticas e listas de convidados reais
 */
const AdminPanel = ({ onLogout }) => {
  const navigate = useNavigate();
  const [pagamentos, setPagamentos] = useState([]);

  // Carregar pagamentos do localStorage
  useEffect(() => {
    const carregarPagamentos = () => {
      const pagamentosSalvos = JSON.parse(localStorage.getItem('pagamentos') || '[]');
      setPagamentos(pagamentosSalvos);
    };

    carregarPagamentos();
    
    // Atualizar a cada 5 segundos
    const interval = setInterval(carregarPagamentos, 5000);
    
    return () => clearInterval(interval);
  }, []);

  /**
   * Manipula o logout do administrador
   */
  const handleLogout = () => {
    onLogout();
    navigate('/admin/login');
  };

  /**
   * Remove um pagamento
   */
  const handleRemoverPagamento = (id) => {
    const novosPagamentos = pagamentos.filter(p => p.id !== id);
    setPagamentos(novosPagamentos);
    localStorage.setItem('pagamentos', JSON.stringify(novosPagamentos));
  };

  /**
   * Confirma um pagamento
   */
  const handleConfirmarPagamento = (id) => {
    const novosPagamentos = pagamentos.map(p => 
      p.id === id ? { ...p, status: 'confirmado' } : p
    );
    setPagamentos(novosPagamentos);
    localStorage.setItem('pagamentos', JSON.stringify(novosPagamentos));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 p-4 relative overflow-hidden">
      {/* Textura de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-zinc-800 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-600 rounded-full blur-3xl"></div>
      </div>

      {/* Container principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-3xl font-bold tracking-wide">
                PAINEL ADMINISTRATIVO
              </h1>
              <p className="text-zinc-400 text-sm tracking-wide mt-1">
                PROJETO X 1.0 - Festa de 18 anos
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-900/50 border border-red-700 text-red-300 font-medium rounded-lg hover:bg-red-900/70 transition-all duration-300"
            >
              SAIR
            </button>
          </div>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Total de pagamentos */}
          <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6">
            <div className="text-center">
              <p className="text-zinc-400 text-sm tracking-wide uppercase">Total de Pagamentos</p>
              <p className="text-white text-4xl font-bold tracking-wide mt-2">{pagamentos.length}</p>
            </div>
          </div>

          {/* Pagamentos confirmados */}
          <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6">
            <div className="text-center">
              <p className="text-zinc-400 text-sm tracking-wide uppercase">Confirmados</p>
              <p className="text-green-400 text-4xl font-bold tracking-wide mt-2">
                {pagamentos.filter(p => p.status === 'confirmado').length}
              </p>
            </div>
          </div>

          {/* Aguardando confirmação */}
          <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6">
            <div className="text-center">
              <p className="text-zinc-400 text-sm tracking-wide uppercase">Aguardando</p>
              <p className="text-yellow-400 text-4xl font-bold tracking-wide mt-2">
                {pagamentos.filter(p => p.status === 'pago').length}
              </p>
            </div>
          </div>
        </div>

        {/* Lista de pagamentos */}
        <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-bold tracking-wide">
              Pagamentos Registrados
            </h2>
            <button
              onClick={() => {
                if (window.confirm('Limpar todos os pagamentos?')) {
                  setPagamentos([]);
                  localStorage.removeItem('pagamentos');
                }
              }}
              className="px-4 py-2 bg-red-900/50 border border-red-700 text-red-300 text-sm rounded-lg hover:bg-red-900/70 transition-all duration-300"
            >
              Limpar Tudo
            </button>
          </div>
          
          {pagamentos.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-zinc-400 text-lg">Nenhum pagamento registrado ainda</p>
              <p className="text-zinc-500 text-sm mt-2">Os pagamentos aparecerão aqui quando os convidados usarem o convite</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pagamentos.map((pagamento) => (
                <div
                  key={pagamento.id}
                  className="bg-zinc-800/50 border border-zinc-600/50 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-white font-medium tracking-wide">{pagamento.nome}</p>
                      <p className="text-zinc-400 text-sm">
                        {pagamento.data} às {pagamento.hora} • {pagamento.metodo}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        pagamento.status === 'confirmado' 
                          ? 'bg-green-900/50 border border-green-700 text-green-300'
                          : 'bg-yellow-900/50 border border-yellow-700 text-yellow-300'
                      }`}>
                        {pagamento.status === 'confirmado' ? 'Confirmado' : 'Aguardando'}
                      </span>
                      
                      {pagamento.status === 'pago' && (
                        <button
                          onClick={() => handleConfirmarPagamento(pagamento.id)}
                          className="px-3 py-1 bg-green-900/50 border border-green-700 text-green-300 text-sm rounded-lg hover:bg-green-900/70 transition-all duration-300"
                        >
                          Confirmar
                        </button>
                      )}
                      
                      <button
                        onClick={() => handleRemoverPagamento(pagamento.id)}
                        className="px-3 py-1 bg-red-900/50 border border-red-700 text-red-300 text-sm rounded-lg hover:bg-red-900/70 transition-all duration-300"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <a
            href="/#/"
            className="text-zinc-400 text-sm hover:text-zinc-300 transition-colors duration-300 tracking-wide"
          >
            ← Voltar para o convite
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
