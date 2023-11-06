// 'use client'
import getDummyMessages from "@/app/_dummy/messages"
import { Fragment, memo } from "react"

const Message = memo(() => {
    return <div className='flex-grow bg-white rounded-md overflow-y-scroll scroll-hide p-5'>
        {getDummyMessages().map((c, i) => {
            return <Fragment key={i}>
                <div className={`w-full flex ${c.senderInex === 0 ? 'justify-start' : 'justify-end'} space-y-2`}>
                    <div className={`flex items-end space-y-3 ${c.senderInex === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <img src={c.sender} alt="avatar" className="w-5 h-5 rounded-full" />
                        <div className="space-y-2 mx-2 message-container">
                            {c.messages.map((v, i) => {
                                return <Fragment key={v.id}>
                                    <div className={`flex message-group text-sm ${c.senderInex === 0 ? 'justify-start' : 'justify-end'}`}>
                                        <p className={`p-2 max-w-[500px] break-words ${c.senderInex === 0 ? 'border' : 'text-black bg-slate-200'}`}>{v.content}</p>
                                    </div>
                                </Fragment>
                            })}
                        </div>
                    </div>
                </div>
            </Fragment>
        })}
    </div>
})

export default Message