'use client'
import { INPUT_VARIENT } from "@/app/_lib/constant"
import { InputHTMLAttributes, memo } from "react"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
    variant?: keyof typeof INPUT_VARIENT,
    icon: React.ReactNode
}

const InputIcon = memo(({ variant = 'primary', icon, ...attr }: InputProps) => {
    return <div className={`flex items-center rounded-md border ${INPUT_VARIENT[variant]} px-1`}>
        {icon}
        <input className="focus:outline-none bg-transparent flex-grow px-2 py-3 text-xs" {...attr} />
    </div>

})

InputIcon.displayName = 'InputIcon'

export default InputIcon