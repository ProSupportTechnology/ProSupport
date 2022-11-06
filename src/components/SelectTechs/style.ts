import styled from "styled-components"

interface iContainerSelectTechs {
  liCount: number
}

export const ContainerSelectTechs = styled.div<iContainerSelectTechs>`
  --li-select-height: 32px;
  --li-length: ${({ liCount }) => liCount};
  position: relative;
  inset: 0;

  button {
    height: 48px;
    padding: 0 16px;
    border-radius: 10px;
    background-color: var(--gray-3);
    color: var(--gray-1);
    font-size: 16px;
    font-weight: 500;
    z-index: 1;
    position: relative;
    inset: 0;
  }

  ul {
    height: 0;
    position: absolute;
    top: 30%;
    left: 0;
    padding: 0 16px;
    background-color: var(--gray-2);
    color: var(--gray-1);
    border-radius: 10px;
    overflow: hidden;
    transition: 0.3s;

    svg {
      position: absolute;
      top: -6px;
      left: 16px;
      z-index: -1;
      transform: rotate(45deg);
      color: var(--gray-2);
    }

    li {
      height: var(--li-select-height);
      display: flex;
      align-items: center;

      label {
        filter: brightness(1.4);

        input {
          margin-right: 8px;
        }
      }
    }
  }

  ul.is_opened {
    height: calc(var(--li-select-height) * var(--li-length) + 16px);
    top: 115%;
    padding: 8px 16px;
    overflow: unset;
  }
`
