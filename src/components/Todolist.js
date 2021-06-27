import Todo from './Todo'; // eslint-disable-line no-unused-vars

const Todolist = ({ todoDB, updateTodoDB }) => (
  <>
    {todoDB.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          todoDB={todoDB}
          updateTodoDB={updateTodoDB}
          delay={index * 20}
        />
    ))}
  </>
);

export default Todolist;
