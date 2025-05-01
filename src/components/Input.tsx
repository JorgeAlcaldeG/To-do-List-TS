type Props = {
    add: (texto:string)=> void; // función para crear la tarea
}

export default function Input({add}: Props) {
  // Funcionamiento del formulario
  function submitHandler(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const textData = formData.get('tareaInput')

    // El input tiene algún dato?
    if(textData && typeof textData === "string"){
      const input = document.getElementById('tareaInput') as HTMLInputElement | null
      if(input){
        add(textData);
        input.value = '';
      }
    }
  }
  return (
    <div className="w-full p-0.5 pl-6 pr-6">
      <form onSubmit={submitHandler}>
        <input className="m-2 rounded-xl border-solid border-3 w-9/10 border-gray-400 dark:border-gray-200 focus:border-violet-400" type="text" name="tareaInput" id='tareaInput' />
        <button type="submit" className="cursor-pointer">Crear</button>
      </form>
    </div>
  )
}