import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Componente do painel administrativo
 * Exibe estatísticas e listas de convidados
 */
const AdminPanel = ({ onLogout }) => {
  const navigate = useNavigate();

  // Dados simulados de convidados
  const convidadosConfirmados = [
    { id: 1, nome: 'João Silva', data: '25/01/2026', tipo: 'Confirmado' },
    { id: 2, nome: 'Maria Santos', data: '25/01/2026', tipo: 'Confirmado' },
    { id: 3, nome: 'Pedro Costa', data: '26/01/2026', tipo: 'Confirmado' },
    { id: 4, nome: 'Ana Oliveira', data: '26/01/2026', tipo: 'Confirmado' },
    { id: 5, nome: 'Carlos Ferreira', data: '27/01/2026', tipo: 'Confirmado' },
  ];

  const convidadosPendentes = [
    { id: 6, nome: 'Lucas Almeida', data: '27/01/2026', tipo: 'Pendente' },
    { id: 7, nome: 'Juliana Martins', data: '28/01/2026', tipo: 'Pendente' },
    { id: 8, nome: 'Roberto Lima', data: '28/01/2026', tipo: 'Pendente' },
  ];

  const totalConvidados = convidadosConfirmados.length + convidadosPendentes.length;

  /**
   * Manipula o logout do administrador
   */
  const handleLogout = () => {
    onLogout();
    navigate('/admin/login');
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
          {/* Total de convidados */}
          <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6">
            <div className="text-center">
              <p className="text-zinc-400 text-sm tracking-wide uppercase">Total de Convidados</p>
              <p className="text-white text-4xl font-bold tracking-wide mt-2">{totalConvidados}</p>
            </div>
          </div>

          {/* Confirmados */}
          <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6">
            <div className="text-center">
              <p className="text-zinc-400 text-sm tracking-wide uppercase">Confirmados</p>
              <p className="text-green-400 text-4xl font-bold tracking-wide mt-2">{convidadosConfirmados.length}</p>
            </div>
          </div>

          {/* Pendentes */}
          <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6">
            <div className="text-center">
              <p className="text-zinc-400 text-sm tracking-wide uppercase">Pendentes</p>
              <p className="text-yellow-400 text-4xl font-bold tracking-wide mt-2">{convidadosPendentes.length}</p>
            </div>
          </div>
        </div>

        {/* Listas de convidados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lista de confirmados */}
          <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6">
            <h2 className="text-white text-xl font-bold tracking-wide mb-4">
              Convidados Confirmados
            </h2>
            <div className="space-y-3">
              {convidadosConfirmados.map((convidado) => (
                <div
                  key={convidado.id}
                  className="bg-zinc-800/50 border border-zinc-600/50 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium tracking-wide">{convidado.nome}</p>
                      <p className="text-zinc-400 text-sm">{convidado.data}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-900/50 border border-green-700 text-green-300 text-sm rounded-full">
                      {convidado.tipo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lista de pendentes */}
          <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-6">
            <h2 className="text-white text-xl font-bold tracking-wide mb-4">
              Convidados Pendentes
            </h2>
            <div className="space-y-3">
              {convidadosPendentes.map((convidado) => (
                <div
                  key={convidado.id}
                  className="bg-zinc-800/50 border border-zinc-600/50 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium tracking-wide">{convidado.nome}</p>
                      <p className="text-zinc-400 text-sm">{convidado.data}</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-900/50 border border-yellow-700 text-yellow-300 text-sm rounded-full">
                      {convidado.tipo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <a
            href="/"
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
