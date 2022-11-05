import styled from "styled-components";

export const StyledFormSignup = styled.form`
  height: max-content;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0px 0px 20px 20px;
  background: var(--linear-gradient-form);
  
  h1 {
    color: var(--gray-0);
  }

  @media(min-width: 1000px){
    max-width: 30%;
    height: 70%;
    gap: 5%;
    border-radius: 0px 20px 20px 0px;
  }
`;
