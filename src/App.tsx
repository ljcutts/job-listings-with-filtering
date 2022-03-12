import React from 'react';
import './App.css';

function App() {
  return (
    <main>
       <div className='h-156 bg-bgImage mb-70 bg-mobileHeader bg-no-repeat bg-fixed'>
      <img src="./images/bg-header-mobile.svg"  />
    </div>
    <div className='bg-white w-80 m-auto h-64 rounded-md shadow-xl mb-11'>
        <img className='z-50 absolute translate-y-4 translate-x-8 ' src="./images/photosnap.svg" height='50' width='50' />
        <div className='bg-bgImage h-64 w-2 rounded-l-md'>
          <section className='w-312 h-64  ml-2 p-5 pt-10'>
          <div className='h-28 border-solid border-b-2 '>
             <div className='flex items-center mb-3'>
               <span className='text-bgImage font-semibold text-sm pr-4'>Photosnap</span>
               <div className='text-xs bg-bgImage text-white rounded-xl font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center'>NEW!</div>
               <div className='text-xs bg-black text-white rounded-xl font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center'>FEATURED</div>
             </div>
             <h1 className='font-semibold mb-2'>Senior Frontend Developer</h1>
             <div className='text-sm opacity-50 flex items-center'>
               <span className='mr-2'>1d ago</span>
               <div className='w-1 h-1 rounded-lg bg-black mr-2'></div>
               <span className='mr-2'>Full Time</span>
               <div className='w-1 h-1 rounded-lg bg-black mr-2'></div>
               <span>USA only</span>
             </div>
           </div>
           <div className='mt-4 flex flex-wrap'>
            <button className='bg-job text-xs text-bgImage rounded-sm font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center mb-3'>Frontend</button>
            <button className='bg-job text-xs text-bgImage rounded-sm font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center'>Senior</button>
            <button className='bg-job text-xs text-bgImage rounded-sm font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center'>HTML</button>
            <button className='bg-job text-xs text-bgImage rounded-sm font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center'>CSS</button>
            <button className='bg-job text-xs text-bgImage rounded-sm font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center'>Javascript</button>
           </div>
          </section>  
        </div>
    </div>
    </main>
   

  );
}

export default App;
