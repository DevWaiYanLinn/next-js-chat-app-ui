'use client'

import { Fragment, memo } from "react"
import Conversation from "./Conversation"
import useSWR, { Fetcher } from 'swr'
const fetcher: Fetcher<any, string> = (url: string) => fetch(url).then((res) => res.json())

const ConversationSkeleton = () => {
    return <div className='flex bg-white p-3 rounded-lg justify-between items-center animate-pulse'>
        <div className='flex items-center '>
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div className='ml-3 space-y-2'>
                <div className='w-[100px] bg-gray-200 p-1 rounded-xl '></div>
                <div className='w-[150px] bg-gray-200 p-1 rounded-xl '></div>
            </div>
        </div>
        <div className='flex flex-col justify-between space-y-2 items-end'>
            <div className='w-[70px] bg-gray-200 p-1 rounded-xl '></div>
            <div className='w-[70px] bg-gray-200 p-1 rounded-xl '></div>
        </div>
    </div>
}

const ConversationList = memo(() => {
    const { data, isLoading } = useSWR('https://randomuser.me/api?results=10', fetcher)
    return <div className='space-y-2 flex-grow overflow-y-scroll scroll-hide'>
        {isLoading ? Array(10).fill(1).map((v, i) => {
            return <Fragment key={i}>
                <ConversationSkeleton />
            </Fragment>
        }) : data?.results?.map((result: any, index: any) => <Fragment key={index}>
            <Conversation name={result.name.first + ' ' + result.name.last} picture={result.picture.medium} />
        </Fragment>)}
    </div>
})

export default ConversationList