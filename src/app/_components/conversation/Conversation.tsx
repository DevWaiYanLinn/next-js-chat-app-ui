'use client'

import { memo } from "react"
import { faker } from '@faker-js/faker';
import { dayJs } from '../../_lib/utility';
import Image from "next/image";

interface ConversationProps {
    name: string;
    picture: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Conversation = memo(({ name, picture, onClick = () => { } }: ConversationProps) => {
    return <div className='flex bg-white p-3 rounded-lg justify-between items-center' onClick={onClick}>
        <div className='flex items-center '>
            <div className="relative">
                <div className={'absolute w-2 h-2 rounded-full right-0 bg-green-500 bottom-1 z-10'}></div>
                <Image className="rounded-full" src={picture} alt="avatar" width={40} height={40} />
            </div>
            <div className='ml-3 space-y-1'>
                <p className='font-bold text-sm'>{name.length > 18 ? name.slice(15) + '...' : name}</p>
                <p className='text-xs'>{faker.word.words([1, 2][Math.floor(Math.random() * 3)])}</p>
            </div>
        </div>
        <div className='flex flex-col justify-between space-y-2 items-end'>
            <p className='text-xs'>{dayJs(faker.date.anytime()).format('LT')}</p>
            <div className='w-[0.8rem] h-[0.8rem] bg-red-500 rounded-full text-white text-[0.5rem] flex justify-center items-center'>{Math.floor(Math.random() * 10) + 1}</div>
        </div>
    </div>
})
Conversation.displayName = 'Conversation'
export default Conversation