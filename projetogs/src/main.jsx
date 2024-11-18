import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Sobre from './routes/Sobre.jsx'; 
import Cadastrar from './routes/Cadastrar.jsx';
import Solucao from './routes/Solucao.jsx';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, // Este é o componente principal que envolve todas as rotas filhas
    errorElement: <Error />, // Caso ocorra um erro, renderiza o componente Error
    children: [
      {
        path: '', 
        element: <Home />, // Renderiza Home na raiz (path '/')
      },
      {
        path: 'sobre', 
        element: <Sobre />, // Renderiza Sobre
      },
      {
        path: 'solucao',
        element: <Solucao />, // Renderiza Solucao
      },
      {
        path: 'login', 
        element: <Login />, // Renderiza Login
      },
      {
        path: 'cadastrar',
        element: <Cadastrar />, // Renderiza Cadastrar
      },
      {
        path: '*', 
        element: <Error />, // Qualquer caminho desconhecido renderiza o Error
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Fornece o roteamento para a aplicação */}
  </StrictMode>
);
