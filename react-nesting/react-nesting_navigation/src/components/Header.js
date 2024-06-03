//  - Export a `Header` component which returns the same `<header></header>` element as in the `App.js` file

export default function Header({ children }) {
  return <header className="header">{children}</header>;
}
