import { TextArea } from "."
import styled from "styled-components"

export const StyledTextArea = styled(TextArea)`
  label {
    display: flex;
    flex-direction: column;
    color: var(--gray-0);

    textarea {
      height: 170px;
      padding: 4px 16px;
      border-radius: 10px;
      resize: none;
      background-color: var(--gray-3);
      color: var(--gray-1);
      border: 2px solid transparent;

      &:focus {
        color: var(--gray-0);
        border: 2px solid var(--gray-1);
      }
    }
  }
`
