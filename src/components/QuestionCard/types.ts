import { ReactNode } from "react"

export interface iQuestionCard {
  title: string
  tech: string
  description: string
  username: string
  date: string
  image: HTMLImageElement | string
  children?: ReactNode
}
