import styled from "styled-components";
import ButtonLink from ".";

export const StyledButtonLink = styled(ButtonLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 0.8rem;
  background-image: linear-gradient(45deg, #0095ff 20%, #8d09ed 90%);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    :after {
      content: "";
      position: absolute;
      inset: -4px;
      border-radius: 13px;
      border: 2px solid var(--grey-0);
    }
  }
`;
