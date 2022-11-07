import styled from "styled-components"
import { StyledSelectTechs } from "."

export const SelectTechs = styled(StyledSelectTechs)`
  height: 52px;
  width: 100%;
  color: var(--gray-1);
  background-color: var(--gray-3);
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 0 16px;

  &:focus {
    color: var(--gray-0);
    border: 2px solid var(--gray-1);
  }
`
