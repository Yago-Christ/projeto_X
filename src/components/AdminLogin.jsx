import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Componente de login administrativo
 * Responsável pela autenticação do administrador
 */
const AdminLogin = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  /**
   * Manipula o envio do formulário de login
   * Valida credenciais fixas (admin/1234)
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    // Validação das credenciais fixas
    if (usuario === 'admin' && senha === '1234') {
      onLogin(); // Atualiza estado de autenticação
      navigate('/admin'); // Redireciona para painel
    } else {
      setErro('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Textura de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-zinc-800 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-600 rounded-full blur-3xl"></div>
      </div>

      {/* Card de login */}
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-2xl shadow-xl p-8">
          <div className="text-center space-y-6">
            {/* Título */}
            <h1 className="text-white text-3xl font-bold tracking-wide">
              ÁREA ADMINISTRATIVA
            </h1>
            
            <p className="text-zinc-400 text-sm tracking-wide">
              PROJETO X 1.0
            </p>

            {/* Formulário de login */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo usuário */}
              <div className="space-y-2">
                <label className="text-zinc-300 text-sm font-medium tracking-wide">
                  Usuário
                </label>
                <input
                  type="text"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  placeholder="Digite o usuário"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Campo senha */}
              <div className="space-y-2">
                <label className="text-zinc-300 text-sm font-medium tracking-wide">
                  Senha
                </label>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite a senha"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Mensagem de erro */}
              {erro && (
                <div className="p-3 bg-red-900/30 border border-red-700/50 rounded-lg">
                  <p className="text-red-300 text-sm tracking-wide">
                    {erro}
                  </p>
                </div>
              )}

              {/* Botão de login */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-zinc-100 text-zinc-900 font-medium rounded-lg hover:bg-zinc-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ENTRAR
              </button>
            </form>

            {/* Link para voltar ao convite */}
            <div className="pt-4 border-t border-zinc-700">
              <a
                href="/"
                className="text-zinc-400 text-sm hover:text-zinc-300 transition-colors duration-300 tracking-wide"
              >
                ← Voltar para o convite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
