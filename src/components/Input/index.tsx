interface iInputProps {
   className?: string
   register: any
   errors: any
}

export function Input({ className, register, errors }: iInputProps) {
   return (
      <div className={className}>
         <input />
         <label>Email</label>
         {errors?.message && <span>{errors?.message}</span>}
      </div>
   )
}
