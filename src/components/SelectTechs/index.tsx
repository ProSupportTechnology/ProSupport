import { ChangeEvent, useEffect, useState } from "react"
import { ContainerSelectTechs } from "./style"
import { RiCheckboxBlankFill } from "react-icons/ri"
import { iStyledSelectTechs } from "./types"

export const StyledSelectTechs = ({ techs, setTechs }: iStyledSelectTechs) => {
  const allTechs = ["HTML", "CSS", "JavaScript", "React", "TypeScript"]
  // const [techs, setTechs] = useState(allTechs.map((tech) => ({ name: tech, checked: false })))
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    setTechs(allTechs.map((tech) => ({ name: tech, checked: false })))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleEvent(event: ChangeEvent<HTMLInputElement>, actualTech: string) {
    setTechs(
      techs.map((tech) => (tech.name === actualTech ? { ...tech, checked: event.target.checked } : tech))
    )
  }

  function selectInnerText() {
    const actualTech = techs
      .map((tech) => tech.checked === true && tech.name)
      .filter((tech) => tech !== false) as string[]
    return actualTech
  }

  return (
    <ContainerSelectTechs liCount={allTechs.length}>
      <button onClick={() => setIsOpened(!isOpened)} type="button">
        {selectInnerText().join("; ") || "Selecione a tecnologia"}
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
