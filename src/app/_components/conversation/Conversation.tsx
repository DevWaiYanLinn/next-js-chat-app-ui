'use client'

import { memo } from "react"
import { faker } from '@faker-js/faker';
import { dayJs } from '../../_lib/utility';
import Image from "next/image";

const Conversation = memo(({ name, picture }: any) => {
    return <div className='flex bg-white p-3 rounded-lg justify-between items-center'>
        <div className='flex items-center '>
            <Image className="rounded-full" src={picture} alt="avatar" width={40} height={40}/>
            <div className='ml-3 space-y-1'>
                <p className='font-bold text-sm'>{name}</p>
                <p className='text-xs'>{faker.word.words([3][Math.floor(Math.random() * 3)])}</p>
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