function Item({ tarea, onDelete, onDone }) {
  return (
    <li>
      <div>
        <h3 style={{ textDecoration: tarea.isDone ? "line-through" : "none" }}>
          {tarea.title}
        </h3>
        <p>{tarea.desc}</p>
      </div>
      <div>
        <input
          type="checkbox"
          checked={tarea.isDone}
          onChange={() => onDone(tarea._id)}
        />
        <button onClick={() => onDelete(tarea._id)}>Borrar</button>
      </div>
    </li>
  )
}

export default Item