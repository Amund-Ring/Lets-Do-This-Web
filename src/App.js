/* eslint-disable */
import './App.scss';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Welcome from './components/Welcome';
import Input from './components/Input';
import Todolist from './components/Todolist';


const App = () => {

  const [showWelcome, toggleShowWelcome] = useState(false);
  const [todoDB, updateTodoDB] = useState([]);
  const [input, setInput] = useState('');








  return (
    <div className="App">
      <section className="contentContainer">

      <Header />

      <Welcome />

      <Todolist todoDB={todoDB} updateTodoDB={updateTodoDB} />

      <Input
        todoDB={todoDB}
        updateTodoDB={updateTodoDB}
        input={input}
        setInput={setInput}
      />

      </section>
    </div>
  );
}







export default App;
