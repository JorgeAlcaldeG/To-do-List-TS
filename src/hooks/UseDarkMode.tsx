import { useState,useEffect } from "react";

export default function UseDarkMode(){
    const [darkMode, setDarkMode] = useState(false);

    // Gestión del modo noche almacenado en localStorage
  useEffect(()=>{
    const mode = localStorage.getItem('darkMode')
    if(mode == 'on'){
      setDarkMode(true);
    }else{
      setDarkMode(false);
    }
  },[])

  // darkMode está activo? En caso de que si se añade la clase 'dark' al tag <html>
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

  // Función del darkmode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return{darkMode, toggleDarkMode}
}