/* eslint-disable */

const Todo = ({todo, todoDB, updateTodoDB}) => {

  const toggleCompleted = () => {

    console.log('two things same time?');

    updateTodoDB(todoDB.map(t => {
      if (t.id === todo.id) {
        return {
          ...t, completed: !t.completed
        }
      }

      return t;
    }));
  }

  const deleteTodo = (e) => {
    console.log(e.target);
    e.preventDefault();
    e.stopPropagation();
    updateTodoDB(todoDB.filter(t => t.id !== todo.id));
  }


  return (
    <div onClick={toggleCompleted} className={`todo ${todo.completed ? 'todo--done' : ''}`} id={todo.id}>
      <span id={todo.id} className={`todo__circle ${todo.completed ? 'todo__circle--done' : ''}`}>
        <p className="todo__emoji">{todo.emoji}</p>
      </span>
      <h3 id={todo.id} className={`todo__text ${todo.completed ? 'todo__text--done' : ''}`}>{todo.description}</h3>
      <span onClick={deleteTodo} id={todo.id} className={`todo__cross ${todo.completed ? 'todo__cross--done' : ''}`}>
        <i className='bx bx-x-circle' id={todo.id}></i>
      </span>
    </div>
  );

}

export default Todo;
