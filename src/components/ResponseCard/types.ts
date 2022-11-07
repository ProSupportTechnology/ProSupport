import { ReactNode } from "react"

export interface iResponseCard {
  tech: string
  description: string
  username: string
  date: string
  image: string
  children?: ReactNode
}
