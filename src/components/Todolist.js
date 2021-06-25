/* eslint-disable */

import Todo from './Todo';

const Todolist = ({todoDB, updateTodoDB}) => {
  
  return (
    <>
      {todoDB.map((todo) => (
        <Todo key={todo.id} todo={todo} todoDB={todoDB} updateTodoDB={updateTodoDB}/>
      ))}
    </>
  );
}

export default Todolist;
