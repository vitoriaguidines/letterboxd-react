import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Usuário:', username);
    console.log('Senha:', password);

    // Exemplo: Verifique se o usuário e a senha são válidos e faça o redirecionamento
    // para a página adequada se o login for bem-sucedido.
    // Se você estiver usando uma biblioteca de roteamento, como o react-router-dom, você pode usá-la para navegação.
    // Exemplo: history.push('/dashboard');
  };

  return (
    <div style={{ color: '#99aabb', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
          <label htmlFor="username" style={{ marginBottom: '8px' }}>Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ backgroundColor: '#99aabb', color: '#efefef', marginBottom: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
          <label htmlFor="password" style={{ marginBottom: '8px' }}>Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: '#99aabb', color: '#efefef', marginBottom: '10px' }}
          />
        </div>
        <button type="button" onClick={handleLogin} style={{ backgroundColor: '#99aabb', color: '#efefef' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
