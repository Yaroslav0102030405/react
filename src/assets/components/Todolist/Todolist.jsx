const Todolist = ({ todos, onDeleteTodo }) => {
  return (
    <>
      <ul>
        {todos.map(({ id, text }) => (
          <li
            style={{
              display: 'flex',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '500px',
              border: '1px solid black',
              padding: '20px',
            }}
            key={id}
          >
            <p>{text}</p>
            <button
              onClick={() => onDeleteTodo(id)}
              style={{ marginLeft: 'auto', border: '1px solid black' }}
            >
              Видалити ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
