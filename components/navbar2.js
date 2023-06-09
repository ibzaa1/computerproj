import Link from 'next/link';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faPlus, faClock, faFaceGrin } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className='flex filter drop-shadow-md bg-gray-800 px-10 py-4 items-centers'>
      <div className='w-3/12 flex items-center'>
        <Link className='text-2xl text-white font-semibold' href='../../login'>
          Capsulate
        </Link>
      </div>
      <div className='w-9/12 flex justify-end items-center'></div>
      <Link href='../addCap'>
        <div className='px-5 py-3 border-2 mr-10 hover:bg-slate-500'>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ fontSize: 30, color: 'white' }}
          />
        </div>
      </Link>
      <div className='px-5 py-3 border-2 mr-10 hover:bg-slate-500'>
        <FontAwesomeIcon
          icon={faClock}
          style={{ fontSize: 30, color: 'white' }}
        />
      </div>
      <div className='px-5 py-3 border-2 mr-10 hover:bg-slate-500'>
        <FontAwesomeIcon
          icon={faFaceGrin}
          style={{ fontSize: 30, color: 'white' }}
        />
      </div>
    </nav>
  );
}
