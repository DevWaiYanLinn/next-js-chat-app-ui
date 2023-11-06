'use client'
import { memo } from "react"
const InputIcon = memo(({ bgColor, icon, ...attr }: any) => {
    return <div className={`flex items-center rounded-md border ${bgColor || 'bg-slate-100'} px-1`}>
        {icon}
        <input {...attr} className="focus:outline-none bg-transparent flex-grow px-2 py-3 text-xs" />
    </div>

})

InputIcon.displayName = 'InputIcon'

export default InputIcon