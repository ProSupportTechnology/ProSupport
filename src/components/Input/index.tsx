import { ReactNode, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { GiBookCover } from "react-icons/gi";
import { MdEmail, MdPhotoSizeSelectActual } from "react-icons/md";
import { iInputProps } from "./types";
import { FaUserAlt } from "react-icons/fa";

export const Input = ({ className, label, name, type, register, errors, modalPlaceholder }: iInputProps) => {
  const [eyeVisible, setEyeVisible] = useState(false);

  function handleClickEye() {
    setEyeVisible(!eyeVisible);
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
      {name === "name" && <FaUserAlt />}
      {name === "email" && <MdEmail />}
      {name === "image" && <MdPhotoSizeSelectActual />}
      {name === "bio" && <GiBookCover />}
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
  );
};
