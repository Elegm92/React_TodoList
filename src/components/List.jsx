import Item from './Items'

function List({ lista, onDelete, onDone, onEdit, onSave, editId, editTitle, editDesc, setEditTitle, setEditDesc }) {
  return (
    <ul>
      {lista.map((tarea) => (
        <Item
          key={tarea._id}
          tarea={tarea}
          onDelete={onDelete}
          onDone={onDone}
          onEdit={onEdit}
          onSave={onSave}
          editId={editId}
          editTitle={editTitle}
          editDesc={editDesc}
          setEditTitle={setEditTitle}
          setEditDesc={setEditDesc}
        />
      ))}
    </ul>
  )
}

export default List