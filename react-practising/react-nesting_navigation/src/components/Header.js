export default function Header({ children }) {
  return (
    <header className="header">
      <h1>My Personal Website</h1>
      {children}
    </header>
  );
}
