import { StyledForm } from "./style";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useState } from "react";
import { useQuestionContext } from "../../contexts/QuestionContext";

export const InputSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchQuestion } = useQuestionContext();
  console.log(inputValue)

  function filterInput(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if (inputValue !== "") {
      searchQuestion(inputValue);
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
