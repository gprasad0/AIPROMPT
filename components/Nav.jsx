'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
const Nav = () => {

    const isUserLoggedIn = true

    const [providers,setProviders] = useState(null)
    
  return (
    <nav className='w-full flex-between mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          width={30}
          height={30}
          className='object-contain'
        ></Image>
        <p className='logo_text'>Promptopia</p> 
      </Link>

      {/* Mobile navigation */}

      <div className='sm:flex hidden'>
          {
             isUserLoggedIn ? (
                 <div className='flex gap-3 md:gap-5'>
                     <Link href='/create-prompt' className='black_btn'>Create Post</Link>
                     <button type='button' onClick = {signOut} className="outline_btn">Sign Out</button>
                     <Link href='/profile'>
                         <Image src='/assets/images/logo.svg' width={37} height={37} className='rounded-full' alt='profile'></Image>
                     </Link>
                 </div>
             ) : <>null</>
          }
      </div>
    </nav>
  );
};

export default Nav;
