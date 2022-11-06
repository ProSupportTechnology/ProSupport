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

  .divClose {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      padding: 7px 15px;
    }
  }
  h1 {
    font-size: 2rem !important;
    color: var(--gray-0);
  }
  button {
    margin: 20px 0px;
    padding: 20px;
  }
  @media (min-width: 1000px) {
    height: 70%;
    gap: 5%;
    border-radius: 0px 20px 20px 0px;
    padding-top: 50px;
  }
`;
