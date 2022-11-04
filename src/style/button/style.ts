import styled, { css } from "styled-components";
import GlobalButton from ".";
import { iStyledButton } from "./types";

export const StyledButton = styled(GlobalButton)<iStyledButton>`
  font-size: 0.8rem;
  color: var(--grey-0);
  cursor: pointer;
  transition: 0.5s;

  ${({ variant }) => {
    switch (variant) {
      default:
        return css`
           {
            font-size: 0.7rem;
            padding: 5px 20px;
            border-radius: 20px;
            border: 2px solid transparent;
            background-image: linear-gradient(
              90deg,
              #4f4d8c 0%,
              #807ddb 55%,
              #5f5da6 100%
            );
            &:hover {
              border: 2px solid var(--grey-0);
            }
          }
        `;
      case "theme-1":
        return css`
           {
            font-size: 0.7rem;
            padding: 5px 20px;
            border: 2px solid transparent;
            border-radius: 20px;
            background-image: linear-gradient(
              90deg,
              #ba090c 0%,
              #ff1f00 66%,
              #d21143 93%
            );
            &:hover {
              border: 2px solid var(--grey-0);
            }
          }
        `;
    }
  }};
`;
