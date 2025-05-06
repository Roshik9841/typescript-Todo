import React from 'react'
import "./styles.css"
import { Todo } from "../model"
import SingleTodo from "./SingleTodo"
interface Props {
    tas: Todo[];
    setTas:  React.Dispatch<React.SetStateAction<Todo[]>>;

}
const TodoList: React.FC<Props> = ({ tas, setTas}) => {
    return (
        <div className="todos">
            {tas.map((todo) => (
                <SingleTodo todo={todo} key={todo.id} tas={tas} setTas={setTas}/>
))}
        </div>

    );
};
export default TodoList;