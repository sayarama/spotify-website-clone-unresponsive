import React from 'react'
import Image from 'next/image'
import {AiFillHome, AiOutlineArrowDown, AiOutlineArrowRight, AiOutlineBook, AiOutlinePlus, AiOutlineSearch} from "react-icons/ai"
import square from "../../assets/square.jpg"

function Sidebar() {
  return (
    <>
    <div className='bg-black w-1/4 p-5 h-[100vh] font-[Poppins]'>
        <div className='w-full bg-[#121212] p-4  rounded-lg'>
            <div className='flex items-center mb-3 gap-5'>
                <AiFillHome className='text-4xl'/> 
                <p>Home</p>
            </div>
            <div className='flex items-center gap-5'>
                <AiOutlineSearch className='text-4xl'/>
                <p>Search</p>
            </div>
        </div>
        <div className='w-full h-[80vh] bg-[#121212] p-4 rounded-lg mt-4'>
            <div className='flex justify-between text-gray-400'>
                <span className='flex items-center gap-5'>
                <AiOutlineBook className='text-4xl'/>
                <b>Your Library</b>
                </span>
                <span className='flex items-center gap-5'>
                <AiOutlinePlus className='text-xl'/>
                <AiOutlineArrowRight className='text-xl'/>
                </span>
            </div>
            <div className='flex gap-3 mt-4 w-full overflow-scroll scrollbar-hide'>
                <p className='bg-[#232323] px-4 py-1 rounded-xl'>Playlist</p>
                <p className='bg-[#232323] px-4 py-1 rounded-xl'>Artist</p>
                <p className='bg-[#232323] px-4 py-1 rounded-xl'>Albums</p>
                <p className='bg-[#232323] px-4 py-1 rounded-xl'>Others</p>
            </div>
            <div className='flex justify-between mt-4 mb-7'>
                <AiOutlineSearch className='text-3xl'/>
                <span className='flex items-center gap-2'>
                    <p>Recents</p>
                    <AiOutlineArrowDown className='bg-[#v] rounded-xl text-xl p-1 '/>
                </span>
            </div>
            <div className=' h-[62vh] overflow-scroll scrollbar-hide'>
                <div className='flex gap-5 items-center mb-5'>
                    <Image
                    src={square}
                    className='w-14 h-12'
                    />
                    <span>
                        <b>Log Horizon</b>
                        <p className='text-gray-400'>Playlist  - ul</p>
                    </span>
                </div>
                <div className='flex gap-5 items-center mb-5'>
                    <Image
                    src={square}
                    className='w-14 h-12'
                    />
                    <span>
                        <b>Sashimono Banner</b>
                        <p className='text-gray-400'>Playlist  - ul</p>
                    </span>
                </div>
                <div className='flex gap-5 items-center mb-5'>
                    <Image
                    src={square}
                    className='w-14 h-12'
                    />
                    <span>
                        <b>Harbingers Starterpack</b>
                        <p className='text-gray-400'>Playlist  - ul</p>
                    </span>
                </div>
                <div className='flex gap-5 items-center mb-5'>
                    <Image
                    src={square}
                    className='w-14 h-12'
                    />
                    <span>
                        <b>Desiderium</b>
                        <p className='text-gray-400'>Playlist  - ul</p>
                    </span>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar