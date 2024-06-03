export default function MenuList({ text, href }) {
  return (
    <li className="navigation__link">
      <a href={href}>{text}</a>
    </li>
  );
}
