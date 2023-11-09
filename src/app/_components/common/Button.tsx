'use client'

import { BUTTON_VARIENT } from "@/app/_lib/constant"
import { join } from "@/app/_lib/helper"
import { ButtonHTMLAttributes, memo } from "react"

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
    fullWidth?: boolean
    variant?: keyof typeof BUTTON_VARIENT
}

const Button = memo(({ variant = 'primary', fullWidth, ...attr }: ButtonProps) => {
    return <button className={join('shadow-md rounded-md text-xs p-3 font-bold', fullWidth && 'w-full', BUTTON_VARIENT[variant])} {...attr}>Login</button>
})

Button.displayName = 'Button'

export default Button