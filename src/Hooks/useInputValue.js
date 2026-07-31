import { useState } from "react";

export default function useInputValue() {
  const [value, setValue] = useState("");

  function changeValue(event) {
    setValue(event.target.value);
    console.log(event.target.value);
  }

  return {
    value,
    changeValue,
  };
}
