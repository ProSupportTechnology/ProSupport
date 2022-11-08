import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {     
  margin:0;
  padding: 0;
  outline: none;
  box-sizing: border-box;  
  border: none;
  font-family: 'Inter', sans-serif;
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
  --gray-3: #262626;
  --gray-2: #434343;
  --gray-1: #868E96;
  --gray-0: #F8F9FA;
  --white: #ffffff;
  --error: #ed0000;

  --linear-gradient-btn: linear-gradient(90deg, rgba(49,180,253,1) 0%, rgba(112,60,255,1) 100%);
  --linear-gradient-form: linear-gradient(
    180deg,
    rgba(46, 65, 89, 1) 80%,
    transparent);
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

.containerDash{
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 50px 50px 40px 180px;
  }
}

.backgroundDash{
  background-image: url("Bg-images/Background1.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow-y: auto;
  padding: 20px;
}
`;
