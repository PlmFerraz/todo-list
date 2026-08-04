import { useState } from "react";

export default function useInputValue() {
  const [value, setValue] = useState("");

  function changeValue(event) {
    setValue(event.target.value);
  }

  function clearValue() {
    setValue("");
  }

  return {
    clearValue,
    value,
    changeValue,
  };
}
