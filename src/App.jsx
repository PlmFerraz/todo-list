import "./App.css";
import Button from "./components/button/Button";
import InputField from "./components/inputField/InputField";
import Main from "./components/main/Main";
import useInputValue from "./Hooks/useInputValue";
import useTodoList from "./Hooks/useTodoList";

function App() {
  const { value, changeValue } = useInputValue();
  const { todos, addTodo } = useTodoList();
  return (
    <Main>
      <InputField onChange={changeValue} />
      <Button
        onClick={() => {
          addTodo(value);
        }}
      >
        Add
      </Button>
    </Main>
  );
}

export default App;
