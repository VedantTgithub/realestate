import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'> {/* Use Link for routing */}
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Ved</span>
            <span className='text-slate-700'>RealEstate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            {/* Add your search icon component here */}
          </button>
        </form>
        <ul className='flex gap-4'>
          <li className=' sm:inline text-slate-700 hover:underline'>
            <Link to='/'>Home</Link> {/* Use Link for routing */}
          </li>
          <li className=' sm:inline text-slate-700 hover:underline'>
            <Link to='/about'>About</Link> {/* Use Link for routing */}
          </li>
          <li className=' text-slate-700 hover:underline'>
            <Link to='/profile'>Sign in</Link> {/* Use Link for routing */}
          </li>
        </ul>
      </div>
    </header>
  );
}
