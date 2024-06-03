import "./styles.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import MenuList from "./components/MenuList";

export default function App() {
  return (
    <>
      <Header>
        <Navigation>
          <Menu>
            <MenuList href="#about" text="About" />
            <MenuList href="#skills" text="Skills" />
            <MenuList href="#biography" text="Biography" />
            <MenuList href="#contact" text="Contact" />
          </Menu>
        </Navigation>
      </Header>

      <main>
        I attempted to replicate the{" "}
        <a href="https://github.com/neuefische/hh-web-24-3/blob/main/sessions/css-flexbox/challenges-css-flexbox.md">
          <strong>Challenge </strong>
        </a>
        from CSS flexbox navigation using React..
      </main>
    </>
  );
}
