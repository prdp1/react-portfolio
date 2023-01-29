import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlineSafetyCertificate } from 'react-icons/ai'

const SocialLinks = () => {

    return (
        <div className=' flex flex-col top-[35%] left-0 fixed'>
            <ul>
                    <li className='flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'
                    >

                        <a href="" className='text-xl flex justify-center items-center w-full
                     text-white'>
                        <>
                        LInkedin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <FaLinkedin size={30} className="mx-2 "/>
                        </>
                            
                            
                        </a>
                    </li>
                    <li className='flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'
                    >

                        <a href="" className='text-xl flex justify-center items-center w-full
                     text-white'>
                        <>
                        Github&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <FaGithub size={30} className="mx-2 "/>
                        </>
                            
                            
                        </a>
                    </li>
                    <li className='flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'
                    >

                        <a href="" className='text-xl flex justify-center items-center w-full
                     text-white'>
                        <>
                        E-Mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <MdEmail size={30} className="mx-2 "/>
                        </>
                            
                            
                        </a>
                    </li>
                    <li className='flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'
                    >

                        <a href="/Pradeep Ghadei -- Resume.pdf" target={'_blank'} rel="noreferrer" className='text-xl flex justify-center items-center w-full
                     text-white rounded-br-md'>
                        <>
                        Resume &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <AiOutlineSafetyCertificate size={30} className="mx-2 "/>
                        </>
                            
                            
                        </a>
                    </li>
            </ul>
        </div>
    )
}

export default SocialLinks