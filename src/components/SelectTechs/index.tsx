import { ChangeEvent, useState } from "react"
import { ContainerSelectTechs } from "./style"
import { RiCheckboxBlankFill } from "react-icons/ri"

export const StyledSelectTechs = () => {
  const allTechs = ["HTML", "CSS", "JavaScript", "React"]
  const [techs, setTechs] = useState(allTechs.map((tech) => ({ name: tech, checked: false })))
  const [isOpened, setIsOpened] = useState(false)

  function handleEvent(event: ChangeEvent<HTMLInputElement>, actualTech: string) {
    setTechs(
      techs.map((tech) => (tech.name === actualTech ? { ...tech, checked: event.target.checked } : tech))
    )
  }

  return (
    <ContainerSelectTechs liCount={allTechs.length}>
      <button onClick={() => setIsOpened(!isOpened)} type="button">
        {allTechs.join("; ")}
      </button>
      <ul className={isOpened ? "is_opened" : ""}>
        <RiCheckboxBlankFill />
        {allTechs.map((tech) => (
          <li key={tech}>
            <label>
              <input onChange={(event) => handleEvent(event, tech)} type="checkbox" name={tech} />
              {tech}
            </label>
          </li>
        ))}
      </ul>
    </ContainerSelectTechs>
  )
}
