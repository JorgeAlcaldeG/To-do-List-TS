import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export type estadoTarea = 'pendiente' | 'progeso' | 'terminada'
export interface Tarea{
    id:string,
    name:string,
    estado:estadoTarea
}

export default function UseTareas(){
    const [tareas,setTareas] = useState<Tarea[]>([]);
    useEffect(()=>{
        // localStorage.removeItem("tareas");
        var data= localStorage.getItem('tareas');
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
            estado: 'pendiente'
        } 
        setTareas([...tareas, newTarea]);
    }
    function delAllTareas(){
        localStorage.removeItem('tareas');
        setTareas([]);
    }
    return { tareas, addTarea, delAllTareas };
}