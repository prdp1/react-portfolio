import React from 'react';
import HeroImage from "../asset/hacker-5471975.png";
import { MdKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-400 text-white'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl py-4 px-6 sm:text-7xl font-bold text-yellow-100'>I'm a FrontEnd Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>I am a FrontEndr ReactJS Developer.
            Currently I am looking for a oppertunity to start with my carrer with these technologies..
          </p>
          
          <div>
            <button className='group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              portfolio
              <span className='group-hover:rotate-90 duration-300 ml-1'>
                <MdKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
        <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto my-20 w-3/3 md:w-full'/>
      </div>
        
      </div>
      
    </div>
    
  );
};

export default Home;