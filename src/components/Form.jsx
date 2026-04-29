import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import todosData from "../datos.json";
import List from "./List";

function Form() {
  const [input, setInput] = useState("");
  const [lista, setLista] = useState([]);
  const [mensaje, setMensaje] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLista(todosData);
  }, []);

  useEffect(() => {
    if (input === "") return;
    const timerInput = setTimeout(() => {
      setInput("");
    }, 20000);
    return () => clearTimeout(timerInput);
  }, [input]);

  useEffect(() => {
    if (!mensaje) return;
    const timerMsj = setTimeout(() => {
      setMensaje(false);
    }, 5000);
    return () => clearTimeout(timerMsj);
  }, [mensaje]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length < 6) {
      setError("Escribe al menos 6 caracteres");
      return;
    }
    setError("");
    setLista((prev) => [
      ...prev,
      { _id: uuidv4(), title: input, desc: "", isDone: false },
    ]);
    setInput("");
    setMensaje(true);
  };

  const handleDelete = (id) => {
    setLista((prev) => prev.filter((item) => item._id !== id));
  };

  const handleClear = () => {
    setLista([]);
  };

  const handleReset = () => {
    setLista(todosData);
  };

  const handleDone = (id) => {
    setLista((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
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

      <List lista={lista} onDelete={handleDelete} onDone = {handleDone} />

      {mensaje && <p className="mensaje">Tarea añadida</p>}

      <div className="actions">
        <button onClick={handleClear}>CLEAR</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </>
  );
}

export default Form;
