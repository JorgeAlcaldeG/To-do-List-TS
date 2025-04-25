import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export type estadoTarea = 'Pendiente' | 'En progeso' | 'Terminada'
export interface Tarea{
    id:string,
    name:string,
    estado:estadoTarea
}

export default function UseTareas(){
    const [tareas,setTareas] = useState<Tarea[]>([]);
    useEffect(()=>{
        const data= localStorage.getItem('tareas');
        if(data){
            const tareasGuardadas:Tarea[] = JSON.parse(data)
            setTareas(tareasGuardadas);
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('tareas', JSON.stringify(tareas))
    },[tareas])
    function addTarea(texto:string){
        const newId = uuidv4()
        const newTarea:Tarea = {
            id: newId,
            name: texto,
            estado: 'Pendiente'
        } 
        setTareas([...tareas, newTarea]);
    }

    return { tareas, addTarea };
}