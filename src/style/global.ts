import { createGlobalStyle } from "styled-components"

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
   --gray-4: #121214;
   --gray-3: #212529;
   --gray-2: #343B41;
   --gray-1: #868E96;
   --gray-0: #F8F9FA;
}

/* ajustar App quando começar a estilizar */
.App {
   background-color: #282c34;
   min-height: 100vh;
}

`
