import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import TodoList from './TodoList'

interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {

    const handleDone = (id: number) => {
        setTodos(todos.map( todo => todo.id === id ? {...todo, isDone:!todo.isDone} : todo))
        console.log("test")
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <form className='todos__single'>
        {todo.isDone ? (
            <s className="todos__single--text">
              {todo.todo}
            </s>
        ) : (
            <span className="todos__single--text">
             {todo.todo}
          </span>
        )}
        <span className="icon">
            <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
        </span>
    </form>
  )
}

export default SingleTodo