import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoApp(){
    let [todos,setTodos]=useState([{task:"smple-task", id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        setTodos((todo)=>{
            return [...todo,{task:newTodo, id:uuidv4(), isDone:false}]
        });
        setNewTodo("");
    }
    let updateTodos=(event)=>{
        setNewTodo(event.target.value);
    }
    let remove=(id)=>{
        setTodos(todos.filter((todo)=>todo.id!=id));
    }
    let update=()=>{
        setTodos(
            todos.map((todo)=>{
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                }
           
        }));
    }
    let updateOne=(id)=>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id==id){
                    return {
                        ...todo,
                        task:todo.task.toUpperCase(),
                    }
                }
                else{
                    return todo;
                }
    })     
        );
    }
    let isMark=(id)=>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id==id){
                    return {
                        ...todo,
                        isDone:true,
                    }
                }
                else{
                    return todo;
                }
    })     
        );
    }
    return(
        <>
            <input type="text" placeholder="Enter your task" onChange={updateTodos} value={newTodo}></input>
            <button onClick={addNewTask}>Add</button>
            <br></br>
            <hr />
            <ul>
            {
                todos.map((el)=>(
                    <>
                    <li key={el.id} ><span style={el.isDone?{textDecoration:"line-through"}:{}}>{el.task}</span>&nbsp;
                    <button onClick={()=>remove(el.id)}>Delete</button>
                    <button onClick={()=>updateOne(el.id)}>updateOne</button>
                    <button onClick={()=>isMark(el.id)}>markAs</button>
                    </li>
                    
                    </>
                ))
            }
            </ul>
            <button onClick={update}>updateUpperCase</button>
        </>
    );
}