/* eslint-disable */

import Todo from './Todo'; // eslint-disable-line no-unused-vars

const Todolist = ({ todoDB, updateTodoDB, toggleWelcome }) => {
  
  return (
    <>
      {todoDB.map(todo => (
        <Todo key={todo.id} todo={todo} todoDB={todoDB} updateTodoDB={updateTodoDB}/>
      ))}
    </>
  );
};

export default Todolist;
