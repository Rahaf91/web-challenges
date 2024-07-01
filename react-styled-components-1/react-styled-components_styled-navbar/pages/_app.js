import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    text-decoration: underline;
    background-color: var(--primary-background);
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}

/*Switch to the `./pages/_app.js` file and make something great happen!

- Style the `Link` so that there is no underline. Hint: Check the handout for an example of how to do this. Additional hint: we can set [the following](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) to `none`.
- Style the `Link` so that the `Link` gets underlined on hover.
 */
