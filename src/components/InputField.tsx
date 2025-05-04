import React from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<props> = ({ todo, setTodo }: props) => {
  return (
    <form className="input">
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        className="input_box"
      />
      <button className="input_submit" type="submit">
        Submit
      </button>
    </form>
  );
};
export default InputField;
