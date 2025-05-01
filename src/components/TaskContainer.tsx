import { estadoTarea } from "../hooks/UseTareas"

type Props = {
    text:string, // Texto de la tarea
    id:string, // Identificador
    delTarea:(id:string)=>void, // Función de borrado individual
    estado:estadoTarea // 'pendiente' | 'progeso' | 'terminada'
    cambioEstado:(id:string, nuevoEstado:estadoTarea)=>void //Función Onclick en el texto
}

export default function TaskContainer({text, delTarea, id, cambioEstado,estado}: Props) {
  
  var nextState:estadoTarea = 'pendiente';
  var fontStyles = "w-9/10"
  if(estado == 'pendiente'){
    nextState = 'progeso'
  }else if(estado == 'progeso'){
    fontStyles +=" font-bold"
    nextState = 'terminada'
  }else{
    fontStyles +=" line-through decoration-black decoration-2"
    nextState = 'pendiente'
  }

  return (
    <div onClick={()=>{cambioEstado(id,nextState)}} className="flex flex-row items-center w-full cursor-pointer rounded-sm mt-3 mb-3 p-3 bg-violet-400 text-white hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] dark:bg-violet-200 dark:text-black transition-colors duration-300">
        <div className="w-full">
          <p className={fontStyles}>{text}</p>
        </div>
        <button onClick={()=>{delTarea(id)}} className="w-1/10 cursor-pointer font-semibold rounded-sm border-solid border-3 border-amber-400 hover:bg-amber-400 dark:border-amber-500  hover:dark:bg-amber-500  transition-colors duration-300" >Borrar</button>
    </div>
  )
}