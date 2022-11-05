import styled from "styled-components";

export const StyledFormLogin = styled.form`
  height: max-content;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: var(--linear-gradient-form);
  h1 {
    color: var(--gray-0);
  }
  button {
    margin: 20px 0px;
    padding: 20px;
    border-radius: 10px;
  }
  
  @media(min-width: 1000px){
    height: 70%;
    gap: 5%;
    border-radius: 0px 20px 20px 0px;
    padding-top: 50px;
  }
`;
