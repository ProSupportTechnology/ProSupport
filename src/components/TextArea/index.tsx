import { iTextAreaProps } from "./types"

export const TextArea = ({ className, label, placeholder, register }: iTextAreaProps) => {
  return (
    <div className={className}>
      <label className="text one">
        {label}
        <textarea className="text one" placeholder={placeholder} {...register} />
      </label>
    </div>
  )
}
