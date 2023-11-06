'use client'
import { memo } from "react"
export default memo(function Input({ ...attr }: any) {
    return <input {...attr} className="focus:outline-none bg-slate-100 px-2 py-3 border text-xs rounded-md w-full" />

})