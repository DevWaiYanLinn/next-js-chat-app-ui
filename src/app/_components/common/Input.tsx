'use client'
import { INPUT_VARIENT } from "@/app/_lib/constant"
import { InputHTMLAttributes, memo } from "react"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
    variant?: keyof typeof INPUT_VARIENT,
}

const Input = memo(({ variant = 'primary', ...attr }: InputProps) => {
    return <input className={`focus:outline-none ${INPUT_VARIENT[variant]}  px-2 py-3 border text-xs rounded-md w-full`} {...attr} />

})

Input.displayName = 'Input'

export default Input