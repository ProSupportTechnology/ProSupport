import { iStyledSelectTechs } from "./types";

export const SelectTechs = ({ className, register, id }: iStyledSelectTechs) => {
  const allTechs = ["HTML", "CSS", "JavaScript", "React", "TypeScript"];

  return (
    <select className={`text two ${className}`} {...register} id={id} defaultValue={allTechs[0]}>
      {allTechs.map((tech) => (
        <option key={tech} value={tech === "JavaScript" ? "JS" : tech === "TypeScript" ? "TS" : tech}>
          {tech}
        </option>
      ))}
    </select>
  );
};
