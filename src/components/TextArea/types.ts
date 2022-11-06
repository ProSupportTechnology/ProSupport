import { UseFormRegisterReturn } from "react-hook-form"

export interface iTextAreaProps {
  className?: string
  label: string
  placeholder: string
  register: UseFormRegisterReturn<string>
}
