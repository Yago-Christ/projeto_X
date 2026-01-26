import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import InviteCard from './components/InviteCard';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import AdminLink from './components/AdminLink';
import './index.css';

/**
 * Componente principal da aplicação
 * Gerencia rotas e estado de autenticação
 * Usa HashRouter para compatibilidade com GitHub Pages
 */
const App = () => {
  // Estado para controlar autenticação do administrador
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Detecta se deve usar HashRouter (GitHub Pages) ou BrowserRouter (desenvolvimento)
  const isGitHubPages = window.location.hostname.includes('github.io');
  const RouterComponent = isGitHubPages ? HashRouter : Router;

  /**
   * Função para realizar login do administrador
   */
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  /**
   * Função para realizar logout do administrador
   */
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <RouterComponent>
      <Routes>
        {/* Rota principal - convite */}
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Textura de fundo com blur leve e opacidade baixa */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-zinc-800 blur-3xl"></div>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-700 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-600 rounded-full blur-3xl"></div>
            </div>

            {/* Container centralizado para o card do convite */}
            <div className="relative z-10">
              <InviteCard />
            </div>

            {/* Link para área administrativa */}
            <AdminLink />
          </div>
        } />

        {/* Rota de login administrativo */}
        <Route path="/admin/login" element={<AdminLogin onLogin={handleLogin} />} />

        {/* Rota do painel administrativo - protegida */}
        <Route 
          path="/admin" 
          element={
            isAuthenticated ? 
              <AdminPanel onLogout={handleLogout} /> : 
              <Navigate to="/admin/login" replace />
          } 
        />

        {/* Redirecionamento padrão */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </RouterComponent>
  );
};

export default App;
