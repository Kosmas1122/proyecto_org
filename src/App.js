import './App.css';

/* Importación de Componentes: */
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';

function App() {
  return (
    <div>
      <Header />  {/* Tercera forma de llamar un componente de React. */}
      <Formulario />
      <MiOrg />
    </div>
  );
}

export default App;
