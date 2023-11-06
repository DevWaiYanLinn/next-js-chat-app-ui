'use client'
import { memo } from "react"
const Input = memo(({ ...attr }: any) =>{
    return <input {...attr} className="focus:outline-none bg-slate-100 px-2 py-3 border text-xs rounded-md w-full" />

})

Input.displayName = 'Input'

export default Input