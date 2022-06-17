import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import TodoList2 from './components/TodoList2';
import Navigation from './layout/Navigation';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd= (e: React.FormEvent) => {
    e.preventDefault()
    if(todo) {
      setTodos([...todos, {
        id: Date.now(),
        todo,
        isDone: false
      }])
      setTodo("")
      console.log(todos)
    }
  }

  return (
    <DragDropContext onDragEnd={() => {}}>
    <div className="App">
      <span className="heading">Taskify</span>
      <Navigation />
        <InputField 
          todo={todo} 
          setTodo={setTodo}
          handleAdd={handleAdd}
        />
      <Routes>
        <Route path='/' element={
          <>
            <TodoList 
              todos={todos} 
              setTodos={setTodos}
            />
          </>
          } />
          <Route path='/todo2' element = {
            <>
              <TodoList2
                todos={todos}
                setTodos={setTodos}
                completedTodos={completedTodos}
                setCompletedTodos={setCompletedTodos}
              />
            </>
          } />
        </Routes>
    </div>
    </DragDropContext>
  );
}
 
export default App;
