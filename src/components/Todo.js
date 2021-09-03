import { useSpring, animated } from 'react-spring';

const Todo = ({
  todo, todoDB, updateTodoDB, delay,
}) => {
  const toggleCompleted = () => {
    updateTodoDB(todoDB.map(t => {
      if (t.id === todo.id) {
        return {
          ...t, completed: !t.completed,
        };
      }
      return t;
    }));
  };

  const deleteTodo = e => {
    e.preventDefault();
    e.stopPropagation();
    updateTodoDB(todoDB.filter(t => t.id !== todo.id));
  };

  const animation = useSpring({
    to: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
    from: {
      opacity: 0,
      transform: 'translateY(400%)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(100%)',
      width: '0px',
    },
    delay,
    config: {
      duration: 280,
    },
  });

  return (
    <animated.div style={animation} className={`todo-animation ${todo.completed ? 'todo-animation--done' : ''}`}>
      <div onClick={toggleCompleted} className={`todo ${todo.completed ? 'todo--done' : ''}`} id={todo.id}>
        <span id={todo.id} className={`todo__circle ${todo.completed ? 'todo__circle--done' : ''}`}>
          <p className="todo__emoji">{todo.emoji}</p>
        </span>
        <h3 id={todo.id} className={`todo__text ${todo.completed ? 'todo__text--done' : ''}`}>{todo.description}</h3>
        <span onClick={deleteTodo} id={todo.id} className={`todo__cross ${todo.completed ? 'todo__cross--done' : ''}`}>
          <i className='bx bx-x-circle' id={todo.id}></i>
        </span>
      </div>
    </animated.div>
  );
};

export default Todo;
// Comment