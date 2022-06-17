import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    index: number;
}

const SingleTodo2: React.FC<Props> = ({todo, todos, setTodos, index}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const [currentTask, setCurrentTask] = useState<number>(0)

    const editInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        editInputRef.current?.focus();
    }, [edit])


    const handleDone = (id: number) => {
        setTodos(todos.map( todo => todo.id === id ? {...todo, isDone:!todo.isDone} : todo))
        console.log("test")
    }

    const handleDelete = (id: number) => {
        MySwal.fire({
            title: "Delete this task?",
            text: "You will not be able to recover it",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire(
                    'Deleted!',
                    'Your task has been deleted.',
                    'success'
                )
                setTodos(todos.filter((todo) => todo.id !== id))
            }
        })
    }

    const handleEdit = (id: number) => {
        setCurrentTask(id)
        if(!edit && !todo.isDone) {
            setEdit(!edit)
        }
    }

    const handleEditSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        
        setTodos(
            todos.map(item => item.id === currentTask ? {...item, todo: editTodo} : item)
            )
        setEdit(false)
    }


  return (
    <form className='todos2__single' onSubmit={(e) => handleEditSubmit(e)}>
        {edit ? (
            <input 
                ref={editInputRef}
                className='todos2__single--text'
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
            />
        ) : todo.isDone ? (
            <s className="todos2__single--text">
              {todo.todo}
            </s>
        ) : (
            <span className="todos2__single--text">
             {todo.todo}
          </span>
        )}
        <span className="icon" onClick={() => handleEdit(todo.id)}>
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

export default SingleTodo2