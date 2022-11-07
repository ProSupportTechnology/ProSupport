import { iStyledSelectTechs } from "./types"

export const StyledSelectTechs = ({ className, register }: iStyledSelectTechs) => {
  const allTechs = ["HTML", "CSS", "JavaScript", "React", "TypeScript"]

  return (
    <select className={`text two ${className}`} {...register}>
      {allTechs.map((tech) => (
        <option key={tech} value={tech}>
          {tech}
        </option>
      ))}
    </select>
  )
}
