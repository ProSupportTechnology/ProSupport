import styled from "styled-components";

export const StyledFormSignup = styled.form`
  height: max-content;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 15px;
  background: var(--linear-gradient-form);
  h1 {
    color: var(--gray-0);
  }
`;
export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  svg {
    color: white;
    font-size: 2rem;
  }
`;
