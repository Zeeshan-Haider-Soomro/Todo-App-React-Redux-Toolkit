import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { EditIcon, X } from 'lucide-react'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
        <div className=' flex flex-col justify-start max-w-[500px]'>
        <div className='text-3xl font-extrabold p-5'>Here Is Your Todos...</div>
        <ul className='list-none overflow-y-scroll h-[400px]'>
            {
                todos.map((todo)=>(
                    <li className='mt-4 flex justify-between items-center bg-zinc-800 py-2 px-2 rounded min-w-[200px]' key={todo.id}>
                        <div className='text-white'>{todo.text}</div>
                        <div className='flex justify-center items-center gap-1'>
                        <button className='text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md cursor-pointer' onClick={()=>dispatch(removeTodo(todo.id))}><EditIcon/></button>
                        <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md cursor-pointer' onClick={()=>dispatch(removeTodo(todo.id))}><X/></button>
                        </div>

                    </li>
                ))
            }
        </ul>

        </div>
  )
}

export default Todos