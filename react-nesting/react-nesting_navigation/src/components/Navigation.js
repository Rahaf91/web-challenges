//The `Navigation` should receive a `children` prop used in its return statement.
// 💡 Note that the `nav` does not have a `className`, so there is no need to add this attribute.

export default function Navigation({ children }) {
  return <nav>{children}</nav>;
}
