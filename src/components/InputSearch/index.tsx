import { StyledForm } from "./style";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useState } from "react";

export const InputSearch = () => {
  const [inputValue, setInputValue] = useState("");

  function filterInput(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if (inputValue !== "") {
      // console.log("Filter");
    }
  }

  return (
    <>
      <StyledForm>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          placeholder="Search"
        />
        <button onClick={(event) => filterInput(event)} type="submit">
          <GiMagnifyingGlass />
        </button>
      </StyledForm>
    </>
  );
};
