import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
*, :root{
  --maxWidth: 1280px;
  --white: #fff;
  --lightGrey: #eee;
  --medGrey: #353535;
  --darkGrey: #1c1c1c;
  --fontSuperBig: 2.5rem;
  --fontBig: 1.5rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
   font-family: "Abel", sans-serif;
  font-style: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  h1{ font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }
  h3{
    font-size: 1.1rem;
    font-weight: 600;
  }
}`;
