import "./App.css";
import Button from "./components/button/Button";
import InputField from "./components/inputField/InputField";
import Main from "./components/main/Main";
import useInputValue from "./Hooks/useInputValue";
import useTodoList from "./Hooks/useTodoList";

function App() {
  const { value, changeValue, clearValue } = useInputValue();
  const { todos, addTodo, removeTodo } = useTodoList();
  return (
    <Main>
      <InputField
        placeholder={"Digite a sua tarefa"}
        value={value}
        onChange={changeValue}
      />
      <Button
        onClick={() => {
          addTodo(value);
          clearValue();
        }}
      >
        Add
      </Button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <p>{todo}</p>
              <Button
                onClick={() => {
                  removeTodo(todo);
                }}
              >
                X
              </Button>
            </li>
          );
        })}
      </ul>
    </Main>
  );
}

export default App;
