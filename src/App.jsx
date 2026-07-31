import "./App.css";
import InputField from "./components/inputField/InputField";
import useInputValue from "./Hooks/useInputValue";

function App() {
  const { value, changeValue } = useInputValue();
  return <InputField onChange={changeValue} />;
}

export default App;
