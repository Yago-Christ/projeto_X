import React from 'react';

/**
 * Componente para corrigir roteamento no GitHub Pages
 * Usa HashRouter em vez de BrowserRouter para compatibilidade
 */
export const setupRouterForGitHubPages = () => {
  // Detecta se está rodando no GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    return true;
  }
  return false;
};

export default setupRouterForGitHubPages;
