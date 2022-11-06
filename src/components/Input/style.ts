import { Input } from "."
import styled from "styled-components"

export const StyledInput = styled(Input)`
  width: 100%;
  height: 52px;
  position: relative;
  inset: 0;

  label {
    position: absolute;
    left: 16px;
    top: 0;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 10px 16px 0 16px;
    color: var(--gray-4);
    background-color: var(--gray-0);
    border-radius: 10px;
    border: 2px solid transparent;

    &:focus {
      border: 2px solid var(--gray-2);
    }
  }

  .input_red {
    border: 2px solid var(--error);
  }

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: var(--gray-2);
  }

  .input_red + svg {
    color: var(--error);

    &:focus + svg {
      color: var(--gray-2);
    }
  }
`
