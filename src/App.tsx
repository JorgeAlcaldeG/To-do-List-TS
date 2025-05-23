import './App.css'
import UseTareas from './hooks/UseTareas';
import UseDarkMode from './hooks/UseDarkMode.tsx';
import Input from './components/Input.tsx';
import TaskContainer from './components/TaskContainer.tsx';
import MoonIcon from './components/MoonIcon.tsx';
import SunIcon from './components/SunIcon.tsx';

function App() {
  // CUSTOM HOOKS
  // UseTareas
  const { tareas, addTarea, delAllTareas, delTarea, changeState } = UseTareas();
  // UseDarkMode
  const {darkMode, toggleDarkMode} = UseDarkMode();
  // Estilos de los iconos del dark mode
  const iconStyle = 'w-2/3 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 inline-block text-stone-900 dark:text-stone-300 hover:text-blue-900 dark:hover:text-yellow-500'

  return (
    <div className='min-h-screen text-black dark:text-white bg-stone-300 dark:bg-stone-900 transition-colors duration-300 pb-10'>
      <div className='pt-2 pl-5 pr-5 mb-10 w-full flex flex-row justify-between'>
        <div>
          <button onClick={toggleDarkMode}>
              {darkMode ? <SunIcon style={iconStyle} /> : <MoonIcon style={iconStyle} />}
          </button>
        </div>
        <button onClick={delAllTareas} className='cursor-pointer border-solid border-violet-400 border-3 text-violet-800 rounded-md p-2 font-semibold dark:text-white   hover:bg-violet-400  hover:text-white transition-all duration-300 '>Borrar todo</button>
      </div>
      <div className="pt-3 rounded-2xl w-9/10 m-auto lg:w-2/3 bg-stone-100 drop-shadow-lg drop-shadow-stone-600 dark:drop-shadow-violet-300 dark:bg-stone-600 transition-colors duration-300">
          <h1 className='text-4xl w-full text-center'>Lista de tareas</h1>
        <Input add={addTarea}/>
      <div className='p-5 bg-violet-200 rounded-bl-2xl rounded-br-2xl rounded-tl-4xl rounded-tr-4xl drop-shadow-none dark:bg-violet-400 transition-colors duration-300'>
          {
            tareas.length > 0 ?
              (tareas?.map(data => (
                <TaskContainer key={data.id} text={data.name} delTarea={delTarea} id={data.id} estado={data.estado} cambioEstado={changeState} />
              ))
            ):
            (
              <p className='text-center font-semibold text-xl'>Aún no hay tareas creadas</p>
            )
          }
      </div>
      </div>
    </div>
  )
}

export default App
