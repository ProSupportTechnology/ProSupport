import { useState } from "react"

export const SelectTechs = () => {
  const allTechs = ["HTML", "CSS", "JavaScript", "React"]
  const [techs, setTechs] = useState({ HTML: false, CSS: false, JavaScript: false, React: false })

  function handleClick() {}

  return (
    <div>
      <button type="button">{allTechs.join("; ")}</button>
      <ul>
        {allTechs.map((tech) => (
          <li>
            <label>
              <input type="checkbox" name={tech} />
              {tech}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
