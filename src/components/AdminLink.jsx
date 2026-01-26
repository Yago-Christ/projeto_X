import React from 'react';

/**
 * Componente de link para área administrativa
 * Exibido discretamente no rodapé do convite
 */
const AdminLink = () => {
  return (
    <div className="fixed bottom-4 right-4 z-20">
      <a
        href="/admin/login"
        className="text-zinc-600 hover:text-zinc-500 text-xs transition-colors duration-300 tracking-wide"
        onClick={(e) => {
          // Adiciona confirmação para evitar acesso acidental
          if (!window.confirm('Deseja acessar a área administrativa?')) {
            e.preventDefault();
          }
        }}
      >
        ADMIN
      </a>
    </div>
  );
};

export default AdminLink;
