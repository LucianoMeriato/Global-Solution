import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './css/Style.css';

function App() {
  return (
    <> 
      <Nav />
      <Outlet /> {/* Aqui será renderizada a rota filha */}
      <Footer />
    </>
  );
}

export default App;
