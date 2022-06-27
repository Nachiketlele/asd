import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, deleteTodo, getData, todoApp } from '../store/action'
import Style from "./Todo.module.css"

const TodoApp = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const {gettodo:gtodo,addtodo:atodo,data:todo} = useSelector((state)=>state.todo)
    const addnew = (newvalue) =>{
        // let value = ref.current.value
        console.log(value)
        todoApp(dispatch,{
            value:newvalue,
            isCompleted: false,
        })
        // ref.current.value = null
        setValue("")
    }
    const complete = (id,Completed)=>{
       dispatch(completeTodo(id,Completed))
    }

    const handleDelete = (id) =>{
      dispatch(deleteTodo(id))
    }
   
    useEffect(()=>{
        getData(dispatch)
    },[])

   


    if(gtodo.loading){
      return   <h1>Loading.......</h1>
    }
    else if(gtodo.error){
      return  <h1>Error......</h1>
    }

  return (
    <div>
        <h1>Todo APP</h1>
        <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder='Type Here...'/>
        <button disabled={atodo.loading} onClick={()=>
            addnew(value) }>+</button>
        <br />
        <div>
            {todo.map((el)=>(
                <div style={{display:"flex", marginLeft:"400px"}} key={el.id}>
                    <input type="checkbox" checked={el.isCompleted} onChange={()=>complete(el.id,!el.isCompleted)} />
                     <p style={{textDecoration: el.isCompleted ? "line-through" : "none"}}> {el.value} </p>
                      <button onClick={()=>handleDelete(el.id)}>del</button>
                </div>
            ))}
            <h1>{todo.length}</h1>
        </div>
    </div>
  )
}

export default TodoApp