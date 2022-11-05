import { useState } from "react"

export const SelectTechs = () => {
  const allTechs = ["HTML", "CSS", "JavaScript", "React"]
  const [techs, setTechs] = useState({ HTML: false, CSS: false, JavaScript: false, React: false })

  function handleClick() {}
  // setTechs({ ...techs, tech: event.target.value })
  return (
    <div>
      <button type="button">{allTechs.join("; ")}</button>
      <ul>
        {allTechs.map((tech) => (
          <li>
            <label>
              <input onChange={(event) => console.log(event.target)} type="checkbox" name={tech} />
              {tech}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
