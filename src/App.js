import './App.css';

/* Importación de Componentes: */
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';

function App() {
  return (
    <div>
      <Header />  {/* Tercera forma de llamar un componente de React. */}
      <Formulario />
    </div>
  );
}

export default App;
