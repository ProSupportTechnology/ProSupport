import styled from "styled-components";

export const StyledEditUser = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 90%;

  p {
    color: var(--white);
    margin-top: 50px;
    text-align: center;
    font-size: 25px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  button {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100px;
    place-self: self-end;
    font-size: 16px;
    height: 40px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
      font-size: 14px;
      height: 30px;
    }
  }
`;
