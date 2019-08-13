import React,{useState} from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"


const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default function App(){

  const[list, setList] = useState([]);

  return(
    <>
    <TodoForm/>
    <TodoList list={list} setList={setList}/>
    </>
  )
}