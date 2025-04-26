import './App.css'
import UseTareas from './hooks/UseTareas';
import Input from './components/Input.tsx'
function App() {
  const { tareas, addTarea } = UseTareas();
  return (
    <div className="appContainer">
      <Input add={addTarea}/>
        {tareas?.map(data => (
          <div key={data.id}>{data.name}</div>
        ))}
    </div>
  )
}

export default App
