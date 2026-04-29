import Item from './Items'

function List({ lista, onDelete, onDone }) {
  return (
    <ul>
      {lista.map((tarea) => (
        <Item key={tarea._id} tarea={tarea} onDelete={onDelete} onDone= {onDone} />
      ))}
    </ul>
  )
}

export default List