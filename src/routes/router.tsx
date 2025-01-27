import { createBrowserRouter } from 'react-router-dom';
import CarrinhoPage from '../pages/CarrinhoPage';
import LojaPage from '../pages/LojaPage';
import Layout from './Layout';
import CadastroDeProdutosPage from '../pages/CadastroDeProdutosPage';
import ErrorPage from '../pages/ErrorPage';
import CardsDeProdutosPage from '../pages/CardsDeProdutosPage';
import CardDeProdutoPage from '../pages/CardProdutoPage';
import CadastroDeProdutosForm from '../components/CadastroDeProdutosForm';
import LoginPage from '../pages/LoginPage';
import JournalPage from '../pages/JournalPage'; 
import PerfilPage from '../pages/PerfilPage';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LojaPage />,
        children: [
          {
            path: ":slug?",
            element: <CardsDeProdutosPage />
          }
        ]
      },
      {
        path: "cadastrar-produto",
        element: (
          <ProtectedRoute>
            <CadastroDeProdutosPage />
          </ProtectedRoute>
        ),
        children: [
          {
            path: ":id?",
            element: <CadastroDeProdutosForm />
          }
        ]
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "produto",
        element: <CardDeProdutoPage />,
        children: [
          {
            path: ":id?",
            element: <CardDeProdutoPage />
          }
        ]
      },
      { path: "carrinho", 
    element: ( 
      <ProtectedRoute>
        <CarrinhoPage />
    </ProtectedRoute> )
    },
      { path: "journal", element: <JournalPage /> },

      {
        path: "perfil",
        element: (
          <ProtectedRoute>
            <PerfilPage />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

export default router;
