import React from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(event:React.FormEvent)=>void;
}
const InputField: React.FC<props> = ({ todo, setTodo,handleAdd }: props) => {
const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(event)=>{handleAdd(event);
      inputRef.current?.blur();
     }}>
      <input
      ref={inputRef}
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        className="input_box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};
export default InputField;
