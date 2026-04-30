function Item({ tarea, onDelete, onDone, onEdit, onSave, editId, editTitle, editDesc, setEditTitle, setEditDesc }) {
  return (
    <li>
      {editId === tarea._id ? (
        // formulario de edición
        <div className="item-actions">
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <button onClick={() => onSave(tarea._id)}>Guardar</button>
        </div>
      ) : (
        
        <div>
          <h3>{tarea.title}</h3>
          <p>{tarea.desc}</p>
        </div>
      )}
      <div className="item-actions">
        <input
          type="checkbox"
          checked={tarea.isDone}
          onChange={() => onDone(tarea._id)}
        />
        <button onClick={() => onEdit(tarea)}>Editar</button>
        <button onClick={() => onDelete(tarea._id)}>Borrar</button>
      </div>
    </li>
  )
}

export default Item