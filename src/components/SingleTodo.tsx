import React from 'react'
import {Todo} from '../model'
type Props = {
    todo: Todo;
    tas:Todo[];
    setTas:  React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({todo,tas,setTas}:Props)=>{
    return(
        <form className="todos__single">
            <span className="todos__single-text">{todo.todo}

            </span>
        <div>
            <span className="icon"></span>
            <span className="icon"></span>
            <span className="icon"></span>
        </div>
        </form>

    )
}

export default SingleTodo