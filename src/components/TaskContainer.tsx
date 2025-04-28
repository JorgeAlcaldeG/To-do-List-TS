
type Props = {
    text:string
}

export default function TaskContainer({text}: Props) {
  return (
    <div className="flex flex-row w-full rounded-sm mt-3 mb-3 p-3 bg-violet-400 text-white dark:bg-violet-200 dark:text-black transition-colors duration-300">
        <p className="w-9/10">{text}</p>
        <button className="w-1/10">Borrar</button>
    </div>
  )
}