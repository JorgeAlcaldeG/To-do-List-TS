type Props = {
    add: (texto:string)=> void;
}

export default function Input({add}: Props) {
  function submitHandler(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const textData = formData.get('tareaInput')
    if(textData && typeof textData === "string"){
      const input = document.getElementById('tareaInput') as HTMLInputElement | null
      add(textData);
      if(input){
        input.value = '';
      }
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="tareaInput" id='tareaInput' />
        <button type="submit">Crear</button>
      </form>
    </div>
  )
}