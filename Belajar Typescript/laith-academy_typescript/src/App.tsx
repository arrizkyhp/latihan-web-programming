import React, { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Hernan Crespo",
      url: "https://img.a.transfermarkt.technology/portrait/big/3410-1590391599.jpg?lm=1",
      age: 42,
      note: "Have a wavy hair"
    }
  ])

  people.map(person => {
    person.age = 50
  })


  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
