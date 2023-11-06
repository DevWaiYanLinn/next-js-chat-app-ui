import InputIcon from './_components/common/InputIcon'
import MagnifyingGlass from './_components/icons/MagnifyingGlass'
import ConversationList from './_components/conversation/ConversationList'
import { faker } from '@faker-js/faker';
import Message from './_components/conversation/Message';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-full fixed top-0 right-0 left-0 bottom-0 bg-white'>
      <div className='flex h-full'>
        <div className='bg-[url("/sidebar-bg.svg")] bg-cover h-full bg-no-repeat w-1/4 p-4 space-y-3 flex flex-col'>
          <h1 className='text-2xl font-bold text-white'>FlirtFlow App</h1>
          <InputIcon icon={<MagnifyingGlass />} placeholder='Search Conversations' bgColor={'bg-white'} />
          <ConversationList />
        </div>
        <div className='w-9/12 bg-[url("/Moon.svg")] bg-cover bg-right bg-no-repeat py-5 pr-5'>
          <div className='flex flex-col h-full space-y-3'>
            <div className='bg-white rounded-md p-3 flex items-center justify-between'>
              <div className='flex justify-center items-center space-x-2'>
                <Image src={faker.image.avatar()} className='rounded-full' alt="avtar" width={40} height={40}/>
                <p className='text-sm font-bold'>
                  {faker.person.fullName()}
                </p>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
              </div>
              <div className='flex items-center space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
            </div>
            <Message />
            <div className='p-2 rounded-md bg-white'>
              <div className='flex justify-between items-center'>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
                </div>
                <div className='flex-grow text-sm ml-2 focus:outline-none' contentEditable={true} placeholder='Start typing here...'></div>
                <div className='flex items-center space-x-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                  <button className='w-10 h-10 rounded-full flex justify-center items-center bg-purple-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

