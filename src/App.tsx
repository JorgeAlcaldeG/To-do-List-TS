import { useState, useEffect } from 'react';
import './App.css'
import UseTareas from './hooks/UseTareas';
import Input from './components/Input.tsx';
import TaskContainer from './components/TaskContainer.tsx';
function App() {
  const { tareas, addTarea, delAllTareas } = UseTareas();
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
    const mode = localStorage.getItem('darkMode')
    if(mode == 'on'){
      setDarkMode(true);
    }else{
      setDarkMode(false);
    }
  },[])
  useEffect(() => {
    if (darkMode) {
      // activar modo noche
      document.documentElement.classList.add("dark");
      localStorage.setItem('darkMode', 'on')
    } else {
      // Desactivar modo noche
      document.documentElement.classList.remove("dark");
      localStorage.setItem('darkMode', 'off')
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className='min-h-screen text-black dark:text-white bg-stone-300 dark:bg-stone-900 transition-colors duration-300'>
      <div className='pt-2 pl-5 pr-5 mb-10 w-full flex flex-row justify-between'>
        <button onClick={toggleDarkMode}>{darkMode?'Desactivar modo noche':'Activar modo noche'}</button>
        <button onClick={delAllTareas}>Borrar todo</button>
      </div>
      <div className="pt-3 rounded-2xl w-1/2 m-auto bg-stone-100 drop-shadow-lg drop-shadow-stone-600 dark:drop-shadow-violet-300 dark:bg-stone-600 transition-colors duration-300">
        <Input add={addTarea}/>
      <div className='p-5 bg-violet-200 rounded-bl-2xl rounded-br-2xl rounded-tl-4xl rounded-tr-4xl drop-shadow-none dark:bg-violet-400 transition-colors duration-300'>
          {
            tareas.length > 0 ?
              (tareas?.map(data => (
                <TaskContainer key={data.id} text={data.name}/>
              ))
            ):
            (
              <p className='text-center'>Aún no hay tareas creadas</p>
            )
          }
      </div>
      </div>
    </div>
  )
}

export default App
