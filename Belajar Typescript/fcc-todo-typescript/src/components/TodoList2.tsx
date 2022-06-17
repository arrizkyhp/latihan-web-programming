import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Todo } from '../model'
import SingleTodo2 from './SingleTodo2'
import './styles.css'

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList2: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  
  return (
    <div className="container">
        <Droppable droppableId="TodosList" >
            {(provided) => (
                <div className='todos2' ref={provided.innerRef} {...provided.droppableProps}>
                    <div className="todos2__heading">
                        Active Tasks
                    </div>
                    {todos.map( (item, index) => (
                            <SingleTodo2
                                index={index}
                                todo={item}
                                key={`todoList-${item.id}${index}`}
                                todos={todos}
                                setTodos={setTodos}
                            />
                    ))}
                </div>
            )}
 
        </Droppable>
        <Droppable droppableId="TodosRemove">
            { (provided) => (
            <div className="todos2 remove" ref={provided.innerRef} {...provided.droppableProps}>
                <div className="todos2__heading">
                    Completed Tasks
                </div>
                {completedTodos.map( (item, index) => (
                    <SingleTodo2
                    index={index}
                    todo={item}
                    key={`todoList-${item.id}${index}`}
                    todos={completedTodos}
                    setTodos={setCompletedTodos}
                    />
                    ))}
            </div> 
            )

            }
             
        </Droppable>
    </div>
  )
}

export default TodoList2