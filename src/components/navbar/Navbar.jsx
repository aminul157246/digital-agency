import Link from 'next/link';
import React from 'react';

const Navbar = () => {


    const session = true;
    const isAdmin = true;



    const navLinks = <>


        <Link className='ml-4' href='/'>Home</Link>
        <Link className='ml-4' href='/about'>About</Link>
        <Link className='ml-4' href='/contact'>Contact</Link>
        <Link className='ml-4' href='/portfolio'>Portfolio</Link>
        <Link className='ml-4' href='/blog'>Blog</Link>
        {
            session ? 
            <>
               {isAdmin &&  <Link className='ml-4' href='/admin'>Admin</Link>}
               <Link href='' className=' ml-4'>Logout</Link >
        </> : 
        <Link className='ml-4' href='/login'>Login</Link>
        }
    </>


    return (
        <div className="navbar bg-base-200 px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
               <Link href='/'>digitalAgency</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* nav links  */}
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end ">
            {/* {navLinks} */}
            {/* <Link className='ml-4' href='/login'>Login</Link> */}

            </div>
        </div>
    );
};

export default Navbar;