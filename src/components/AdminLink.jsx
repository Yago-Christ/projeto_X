import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de link para área administrativa
 * Exibido discretamente no canto da página principal
 */
const AdminLink = () => {
  return (
    <div className="fixed bottom-4 right-4 z-20">
      <Link
        to="/admin/login"
        className="text-zinc-600 hover:text-zinc-500 transition-colors duration-300 text-xs tracking-wide"
      >
        Admin
      </Link>
    </div>
  );
};

export default AdminLink;
