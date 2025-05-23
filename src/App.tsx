import React from 'react';
import InputField from './components/InputField';
import './App.css';
import {Todo} from "./model";
import TodoList from "./components/TodoList"

const App : React.FC =()=>{
  const [todo,setTodo] = React.useState<string>("");
  const[tas,setTas] = React.useState<Todo[]>([]);

    const handleAdd = (event: React.FormEvent)=>{
      event.preventDefault();
      if(todo){
        setTas([...tas,{id:Date.now(),todo,isDone:false}])
        setTodo('');
      }
    }
    console.log(tas);
  return (
    <div className="App">
 
  
    <span className="heading">Taskify</span>
  
    <InputField  todo={todo} setTodo = {setTodo} handleAdd={handleAdd}/>
    <TodoList tas={tas} setTas={setTas}/>
   

 </div>
  )
}


export default App;
