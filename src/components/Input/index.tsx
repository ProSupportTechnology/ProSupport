import { ReactNode } from "react"
import { RiCheckboxBlankFill } from "react-icons/ri"
import { iInputProps } from "./types"

export const Input = ({ className, label, name, type, register, errors }: iInputProps) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="text three">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register}
        className={`text one ${errors?.message ? "input_red" : ""}`}
      />
      {/* {errors?.message && (
        <>
          <span className="text three">{errors?.message as ReactNode}</span>
          <RiCheckboxBlankFill />
        </>
      )} */}
    </div>
  )
}
