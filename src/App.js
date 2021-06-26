/* eslint-disable */

import './App.scss';
import { useEffect, useState } from 'react';
import Header from './components/Header'; // eslint-disable-line no-unused-vars
import Welcome from './components/Welcome'; // eslint-disable-line no-unused-vars
import Input from './components/Input'; // eslint-disable-line no-unused-vars
import Todolist from './components/Todolist'; // eslint-disable-line no-unused-vars

const App = () => {
  const [showWelcome, toggleWelcome] = useState(false);
  const [todoDB, updateTodoDB] = useState([]);
  const [input, setInput] = useState('');

  const getFromLocalStorage = () => {
    if (localStorage.getItem('todoDB') === null) {
      localStorage.setItem('todoDB', JSON.stringify(todoDB));
    } else {
      updateTodoDB(JSON.parse(localStorage.getItem('todoDB')));
    }
  };

  const saveToLocalstorage = () => {
    localStorage.setItem('todoDB', JSON.stringify(todoDB));
  };


  useEffect(() => {
    getFromLocalStorage();
  }, []);
  
  useEffect(() => {
    saveToLocalstorage();
  });

  // toggleWelcome(todoDB.length === 0);

  return (
    <div className="App">
      <section className="contentContainer">

      <Header />

      <Welcome showWelcome={showWelcome} />

      <Todolist todoDB={todoDB} updateTodoDB={updateTodoDB} toggleWelcome={toggleWelcome} />

      <Input
        todoDB={todoDB}
        updateTodoDB={updateTodoDB}
        input={input}
        setInput={setInput}
      />

      </section>
    </div>
  );
};

export default App;
