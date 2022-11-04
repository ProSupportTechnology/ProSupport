import { UseFormRegisterReturn, FieldError, Merge, FieldErrorsImpl } from "react-hook-form"

export interface iInputProps {
  className?: string
  label: string
  name: string
  type: string
  register: UseFormRegisterReturn<string>
  errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}
