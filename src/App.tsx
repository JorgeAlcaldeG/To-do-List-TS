import './App.css'
import UseTareas from './hooks/useTareas';
function App() {
  const { tareas, addTarea} = UseTareas();
  return (
    <>
      <button onClick={()=>{addTarea("test")}}>Crear</button>
    </>
  )
}

export default App
