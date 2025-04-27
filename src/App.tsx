import { useState, useEffect } from 'react';
import './App.css'
import UseTareas from './hooks/UseTareas';
import Input from './components/Input.tsx'
function App() {
  const { tareas, addTarea } = UseTareas();
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      // Si el modo oscuro está activado, añadir la clase 'dark' al <html>
      document.documentElement.classList.add("dark");
    } else {
      // Si no está activado, quitar la clase 'dark'
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]); // Se ejecuta cada vez que darkMode cambia
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className='min-h-screen text-black dark:text-white bg-stone-300 dark:bg-stone-900 transition-colors duration-300'>
      <button onClick={toggleDarkMode}>test</button>
      <div className="pt-3 rounded-2xl w-1/2 m-auto bg-stone-100 drop-shadow-lg drop-shadow-stone-600 dark:drop-shadow-violet-300 dark:bg-stone-600 transition-colors duration-300">
        <Input add={addTarea}/>
      <div className='p-5 bg-violet-400 rounded-bl-2xl rounded-br-2xl rounded-tl-4xl rounded-tr-4xl drop-shadow-none'>
          {tareas?.map(data => (
            <div key={data.id}>{data.name}</div>
          ))}
      </div>
      </div>
    </div>
  )
}

export default App
