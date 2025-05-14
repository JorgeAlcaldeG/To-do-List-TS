import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Estados de la tarea
export type estadoTarea = 'pendiente' | 'progeso' | 'terminada'
// Tareas
export interface Tarea{
    id:string,
    name:string,
    estado:estadoTarea
}

export default function UseTareas(){
    const [tareas,setTareas] = useState<Tarea[]>([]);
    // Gestión de las tareas almacenadas en local storage
    useEffect(()=>{
        // localStorage.removeItem("tareas"); // DEBUG
        var data= localStorage.getItem('tareas');
        // Existen datos en localStorage?
        if(data){
            const tareasGuardadas:Tarea[] = JSON.parse(data)
            setTareas(tareasGuardadas);
        }
    },[])
    // Almacenamiento de las tareas en localStorage cuando se actualiza el state tareas
    useEffect(()=>{
        localStorage.setItem('tareas', JSON.stringify(tareas))
    },[tareas])

    // Funciones para gestionar las tareas
    // Creación
    function addTarea(texto:string){
        const newId = uuidv4()
        const newTarea:Tarea = {
            id: newId,
            name: texto,
            estado: 'pendiente'
        } 
        setTareas([...tareas, newTarea]);
    }
    // Borrado individual
    function delTarea(idTask:string){
        const taskTemp = tareas.filter(tarea => !tarea.id.includes(idTask))
        setTareas(taskTemp);
    }
    // Borrado general
    function delAllTareas(){
        localStorage.removeItem('tareas');
        setTareas([]);
    }
    function changeState(idTask:string, nuevoEstado:estadoTarea){
        // console.log(idTask)
        // console.log(nuevoEstado)

        setTareas(prevTareas =>
            prevTareas.map(tarea=>
                tarea.id == idTask ? {...tarea, estado:nuevoEstado}:tarea
            )
        )
    }
    return { tareas, addTarea, delAllTareas, delTarea,changeState };
}