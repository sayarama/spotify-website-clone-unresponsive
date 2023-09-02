import Image from 'next/image'
import React from 'react'
import square from "../../assets/square.jpg"
import {FaCircleChevronLeft, FaCircleChevronRight, FaCircleChevronDown} from "react-icons/fa6"

function Main() {
  return (
   <div className='bg-black w-screen p-3 '>
     <div className='overflow-scroll p-5 bg-[#121212] scrollbar-hide h-screen'>
        <div className='w-full flex items-center justify-between'>
            <div className='flex gap-3'>
                <FaCircleChevronLeft className='text-2xl'/>
                <FaCircleChevronRight className='text-2xl'/>
            </div>
            <div className='flex items-center gap-5'>
                <p className='bg-white text-black font-bold px-3 py-1 rounded-xl'>Explore Premium</p>
                <span className='flex gap-2 items-center bg-gray-900 px-3 py-1 rounded-xl font-bold '>
                    <FaCircleChevronDown/>
                    <p>Install App</p>
                </span>
                <div className='w-[40px] h-[40px] bg-red-500 rounded-2xl'>
                </div>
            </div>
        </div>
        <div className='mt-5'>
            <h1 className='text-4xl font-bold'>Good Evening</h1>
            <div className='flex flex-wrap gap-5 mt-5'>
                <div className='flex items-center gap-5 bg-zinc-800 p-3'>
                    <Image
                    src={square}
                    className='w-20 h-20' 
                    />

                    <span>
                        <p className='text-xl font-bold'>Interstellar Journey</p>
                        <p className='text-lg text'>Album - ul</p>
                    </span>
                </div>
                <div className='flex items-center gap-5 bg-zinc-800 p-3'>
                    <Image
                    src={square}
                    className='w-20 h-20' 
                    />

                    <span>
                        <p className='text-xl font-bold'>Glanz Der Nacht</p>
                        <p className='text-lg'>Album - ul</p>
                    </span>
                </div>
                <div className='flex items-center gap-5 bg-zinc-800 p-3'>
                    <Image
                    src={square}
                    className='w-20 h-20' 
                    />

                    <span>
                        <p className='text-xl font-bold'>Dawnbringer</p>
                        <p className='text-lg'>Album - ul</p>
                    </span>
                </div>
                <div className='flex items-center gap-5 bg-zinc-800 p-3'>
                    <Image
                    src={square}
                    className='w-20 h-20' 
                    />

                    <span>
                        <p className='text-xl font-bold'>Wolves Gravestone</p>
                        <p className='text-lg'>Album - ul</p>
                    </span>
                </div>
                <div className='flex items-center gap-5 bg-zinc-800 p-3'>
                    <Image
                    src={square}
                    className='w-20 h-20' 
                    />

                    <span>
                        <p className='text-xl font-bold'>Dawnbringer</p>
                        <p className='text-lg'>Album - ul</p>
                    </span>
                </div>
                <div className='flex items-center gap-5 bg-zinc-800 p-3'>
                    <Image
                    src={square}
                    className='w-20 h-20' 
                    />

                    <span>
                        <p className='text-xl font-bold'>Wolves Gravestone</p>
                        <p className='text-lg'>Album - ul</p>
                    </span>
                </div>
                <div className='flex items-center gap-5 bg-zinc-800 p-3'>
                    <Image
                    src={square}
                    className='w-20 h-20' 
                    />

                    <span>
                        <p className='text-xl font-bold'>Dawnbringer</p>
                        <p className='text-lg'>Album - ul</p>
                    </span>
                </div>
                <div className='flex items-center gap-5 bg-zinc-800 p-3'>
                    <Image
                    src={square}
                    className='w-20 h-20' 
                    />

                    <span>
                        <p className='text-xl font-bold'>Wolves Gravestone</p>
                        <p className='text-lg'>Album - ul</p>
                    </span>
                </div>
            </div>
        </div>
        <hr className='mt-5'/>
        <section className='mt-5'>
            <div className='flex items-center justify-between'>
                <p>Made For You</p>
                <p>Show all</p>
            </div>
            <div className='flex overflow-scroll scrollbar-hide'>
            <div className='flex-col p-8'>
                <Image
                src={square}
                className='w-44 h-44 mb-5'
                />
                <b>Daily Mix 1</b>
                <p className='mt-2 text-gray-400'>Lorem Ipsum S.PG.MM</p>
            </div>
            <div className='flex-col p-8'>
                <Image
                src={square}
                className='w-44 h-44 mb-5'
                />
                <b>Daily Mix 1</b>
                <p className='mt-2 text-gray-400'>Lorem Ipsum S.PG.MM</p>
            </div>
            <div className='flex-col p-8'>
                <Image
                src={square}
                className='w-44 h-44 mb-5'
                />
                <b>Daily Mix 1</b>
                <p className='mt-2 text-gray-400'>Lorem Ipsum S.PG.MM</p>
            </div>
            <div className='flex-col p-8'>
                <Image
                src={square}
                className='w-44 h-44 mb-5'
                />
                <b>Daily Mix 1</b>
                <p className='mt-2 text-gray-400'>Lorem Ipsum S.PG.MM</p>
            </div>
            </div>
        </section>
        {/* Judul kedua */}
        <hr className='mt-5'/>
        <section className='mt-5'>
            <div className='flex items-center justify-between'>
                <p>Made For You</p>
                <p>Show all</p>
            </div>
            <div className='flex overflow- scrollbar-hide'>
            <div className='flex-col p-8'>
                <Image
                src={square}
                className='w-44 h-44 mb-5'
                />
                <b>Daily Mix 1</b>
                <p className='mt-2 text-gray-400'>Lorem Ipsum S.PG.MM</p>
            </div>
            <div className='flex-col p-8'>
                <Image
                src={square}
                className='w-44 h-44 mb-5'
                />
                <b>Daily Mix 1</b>
                <p className='mt-2 text-gray-400'>Lorem Ipsum S.PG.MM</p>
            </div>
            <div className='flex-col p-8'>
                <Image
                src={square}
                className='w-44 h-44 mb-5'
                />
                <b>Daily Mix 1</b>
                <p className='mt-2 text-gray-400'>Lorem Ipsum S.PG.MM</p>
            </div>
            <div className='flex-col p-8'>
                <Image
                src={square}
                className='w-44 h-44 mb-5'
                />
                <b>Daily Mix 1</b>
                <p className='mt-2 text-gray-400'>Lorem Ipsum S.PG.MM</p>
            </div>
            </div>
        </section>
    </div>
   </div>
  )
}

export default Main