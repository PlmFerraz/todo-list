export default function Button({ children, icon, onClick }) {
  return (
    <button icon={icon} onClick={onClick}>
      {children}
    </button>
  );
}
