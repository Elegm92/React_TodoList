import {  useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import todosData from "../datos.json";
// import listado from './List'

function Form() {
  const [input, setInput] = useState(""); //Empieza vacio. Guarda el texto const [input, setInput] = useState(""); //Empieza vacio. Guarda el texto
  const [lista, setLista] = useState([]); //Guarda una lista y el array empieza vacio
  const [mensaje, setMensaje] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLista(todosData);
  }, []);

  useEffect(() => {
    if (input === "") return
      const timer = setTimeout(() => {
        setInput("");
      }, 20000);
      return () => clearTimeout(timer);
    
  }, [input]);

  useEffect(()=>{
    if(!mensaje) return
    const timerMsj = setTimeout(() =>{
      setMensaje(false)
    },5000);
    return()=> clearTimeout(timerMsj)
  }, [mensaje])

  const handleSubmit = (e) => {
     e.preventDefault();
    if(input.length < 6){ //Validamos la longitud
      setError("Escribe al menos 6 caracteres")
      return
    }
    setError("")
    setLista((prev) => [...prev, { id: uuidv4(), text: input }]); //Añade la tarea a la lista. copia todo lo que ya había en la lista" y luego añade el input al final
    setInput(""); //Vacia el input
    setMensaje(true); //Activamos el mensaje de añadido
  };

  const handleDelete = (id) => {
    setLista((prev) => prev.filter((item) => item.id !== id));
  };
  const handleClear = () => {
    //Vacia el array y lo deja limpio por lo que el map no tiene nada que recorrer
    setLista([]);
  };

  const handleReset = () => {
    setLista(todosData);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit" hidden={input === ""}>
          ADD
        </button>
      </form>

        {error && <p className="error">{error}</p>}
      
      <ul>
        {lista.map(
          (
            tarea, //map recorre la lista y por cada tarea crea un <li>. Es como un bucle for pero en React. handleDelete. Elimina la tarea que esta en posicion i
          ) => (
            <li key={tarea.id}>
              {tarea.text}
              <button onClick={() => handleDelete(tarea.id)}>Borrar</button>
            </li>
          ),
        )}
      </ul>

        {mensaje && <p className="mensaje">Tarea añadida</p>}

      <div className="actions">
        <button onClick={handleClear}>CLEAR</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </>
  );
}

export default Form;
