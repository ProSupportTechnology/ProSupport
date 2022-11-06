import { Dispatch, SetStateAction } from "react"

type iSelectTechs = { name: string; checked: boolean }

export interface iStyledSelectTechs {
  techs: iSelectTechs[]
  setTechs: Dispatch<SetStateAction<iSelectTechs[]>>
}
