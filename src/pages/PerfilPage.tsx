
import React from 'react';
import { useNavigate } from "react-router-dom";

const PerfilPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    navigate('/login');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <h5>Perfil do Usuário</h5>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
      <hr className="mt-0" />

      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#444' }}>
        Aqui é o seu perfil
      </p>
    </div>
  );
};

export default PerfilPage;
