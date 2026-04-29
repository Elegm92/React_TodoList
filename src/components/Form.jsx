import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import todosData from "../datos.json";
// import listado from './List'

function Form() {
  const [input, setInput] = useState(""); //Empieza vacio. Guarda el texto const [input, setInput] = useState(""); //Empieza vacio. Guarda el texto
  const [lista, setLista] = useState(todosData); //Guarda una lista y el array empieza vacio

  function handleSubmit(e) {
    e.preventDefault();
    setLista((prev) => [...prev, { id: uuidv4(), text: input }]); //Añade la tarea a la lista. copia todo lo que ya había en la lista" y luego añade el input al final
    setInput(""); //Vacia el input
  }

  function handleDelete(id) {
    setLista((prev) => prev.filter((item) => item.id !== id));
  }
  function handleClear() {
    //Vacia el array y lo deja limpio por lo que el map no tiene nada que recorrer
    setLista([]);
  }

  function handleReset() {
    setLista(todosData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">ADD</button>
      </form>
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
      <button onClick={handleClear}>CLEAR</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
}

export default Form;
