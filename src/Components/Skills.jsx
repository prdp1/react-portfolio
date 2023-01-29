import React from 'react'
import css from '../asset/css.png';
import html from '../asset/html.png';
import javascript from '../asset/javascript.png';
import node from '../asset/node.png';
import tailwind from '../asset/tailwind.png';
import react from '../asset/react.png';
import github from '../asset/github.png';


const Portfolio = () => {
  return (
    <div name="skills" className='bg-gradient-to-b from-black to-gray-500 w-full h-screen'>

    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                Skills
            </p>

            <p className='py-6'>
              These are the technologies I've learned.
            </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-12 sm:px-0'>
          <div className='shadow-2xl hover:scale-105 duration-400 py-2 rounded-lg'>
            <img src={html} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='shadow-2xl hover:scale-105 duration-400 py-2 rounded-lg'>
            <img src={css} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='shadow-2xl hover:scale-105 duration-400 py-2 rounded-lg'>
            <img src={github} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='shadow-2xl hover:scale-105 duration-400 py-2 rounded-lg'>
            <img src={react} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='shadow-2xl hover:scale-105 duration-400 py-2 rounded-lg'>
            <img src={javascript} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='shadow-2xl hover:scale-105 duration-400 py-2 rounded-lg'>
            <img src={tailwind} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='shadow-2xl hover:scale-105 duration-400 py-2 rounded-lg'>
            <img src={node} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>HTML</p>
          </div>
          
        </div>
    </div>

    </div>
  )
}

export default Portfolio