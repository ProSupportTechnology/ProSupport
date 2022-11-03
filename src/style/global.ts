import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {     
  margin:0;
  padding: 0;
  outline: none;
  box-sizing: border-box;  
  border: none;
  font-family: 'Inter', sans-serif;
  transition: 0.15s;
}

img {
  max-width: 100%;
}

button {
  cursor: pointer;
}

ul, ol, li {
  list-style: none;
}

:root{    
  --color-primary: #4F4D8C;
  --color-primary-focus: #5F5DA6;
  --color-primary-negative: #3B3A66;
  --grey-4: #121214;
  --grey-3: #212529;
  --grey-2: #343B41;
  --grey-1: #868E96;
  --grey-0: #F8F9FA;
}


/* TYPOGRAPHY */
.title {
  font-weight: 700;
}

.title.one {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.title.two {
  font-size: 1rem;
  line-height: 1.625rem;
}

.title.three {
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.text {
  font-weight: 400;
}

.text.one {
  font-size: 1rem;
  line-height: 1.625rem;
}

.text.two {
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.text.three {
  font-size: 0.75rem;
  line-height: 1.375rem;
}


`;
