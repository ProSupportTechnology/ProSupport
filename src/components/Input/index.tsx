import { ReactNode, useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { RiCheckboxBlankFill } from "react-icons/ri"
import { HiUser } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"
import { iInputProps } from "./types"

export const Input = ({ className, label, name, type, register, errors, modalPlaceholder }: iInputProps) => {
  const [eyeVisible, setEyeVisible] = useState(false)

  function handleClickEye() {
    setEyeVisible(!eyeVisible)
  }

  return (
    <div className={`${className} ${modalPlaceholder ? "isModal" : ""}  `}>
      <label htmlFor={name} className={modalPlaceholder ? "text one" : "text three"}>
        {label}
      </label>
      <input
        id={name}
        type={eyeVisible ? "text" : type}
        placeholder={modalPlaceholder ? modalPlaceholder : ""}
        {...register}
        className={`text one ${errors?.message ? "input_red" : ""}`}
      />
      {name === "name" && <HiUser />}
      {name === "email" && <MdEmail />}
      {name === "password" || name === "confirmPassword" ? (
        eyeVisible ? (
          <AiFillEye onClick={handleClickEye} />
        ) : (
          <AiFillEyeInvisible onClick={handleClickEye} />
        )
      ) : (
        ""
      )}

      {errors?.message && (
        <div>
          <span className="text three">{errors?.message as ReactNode}</span>
          <RiCheckboxBlankFill />
        </div>
      )}
    </div>
  )
}
