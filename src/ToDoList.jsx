import React, { useEffect, useRef, useState } from 'react'

function ToDoList() {

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const isFirstLoad = useRef(true)

    useEffect(()=>{
        try{
            const stored = JSON.parse(localStorage.getItem('todos'))
                if(Array.isArray(stored)){
                    setTodos(stored)
                }
        }catch(err){
            console.log('failed get data')
        }
    },[])

    useEffect(()=>{
        if(isFirstLoad.current){
            isFirstLoad.current = false
            return
        }
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const handleAdd = () => {
        if(input.trim() == ''){
            return
        }
        setTodos([...todos,{id:Date.now(),text : input}])
        setInput('')
    }

    const handleDelete = (index) => {
        const newtodos = todos.filter((_,i) => i !== index)
        setTodos(newtodos)
    }

    
  return (
    <div>
        <input 
            type="text" 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            placeholder='Masukan any'
        />

        <button onClick={handleAdd}>Create</button>

        <ul>
            {todos.map((todo, index)=>(
                <li key={todo.id}>{todo.text}<button onClick={()=>handleDelete(index)}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList