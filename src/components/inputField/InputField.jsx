export default function InputField({ placeholder, value, onChange }) {
  return (
    <input placeholder="Digite uma tarefa" value={value} onChange={onChange} />
  );
}
