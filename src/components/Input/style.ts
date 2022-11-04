import { Input } from "."
import styled from "styled-components"

export const StyledInput = styled(Input)`
  height: 52px;
  position: relative;
  inset: 0;

  label {
    position: absolute;
    left: 16px;
    top: 0;
  }

  input {
    height: 100%;
    width: 100%;
    padding: 10px 16px 0 16px;
    color: var(--gray-4);
    background-color: var(--gray-0);
    border: 1px solid transparent;
    border-radius: 10px;

    border: 1px solid var(--gray-2);
  }

  .input_red {
    border: 1px solid red;
  }
`
