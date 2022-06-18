import './App.css';
import Input from '../Input/index.js';
import List from '../List/index.js';
import React, { useState, useEffect } from 'react';
import LoginButton from '../../login.js';
import LogoutButton from '../../logout.js';
import Profile from '../../profile.js';

function App() {
  const [list, setList] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    let newData = 'hi';
    async function fetchData() {
      let data = await fetch(`http://localhost:3001/?email=${user.email}`);
      newData = await data.json();
      let arr = newData.payload;
      setList([...arr]);
    }

    console.log(user);
    if (!user) {
      setList(['this is a test', 'you are not logged in']);
    } else {
      fetchData();
    }
  }, [user]);

  function addUser(user) {
    setUser(user);
  }
  function addItem(item) {
    setList([...list, item]);
  }

  function deleteItem(index) {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }
  return (
    <main className="App">
      <Input addItem={addItem}></Input>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <Profile addUser={addUser}></Profile>
      <List itemArray={list} deleteFunction={deleteItem}></List>
    </main>
  );
}

export default App;
