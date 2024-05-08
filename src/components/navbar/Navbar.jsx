import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
           <div><Link href='/'>digitalAgency</Link></div>
           <div><Link href='/'>Home</Link></div>
           <div><Link href='/about'>About</Link></div>
           <div><Link href='/contact'>Contact</Link></div>
           <div><Link href='/login'>Login</Link></div>
        </div>
    );
};

export default Navbar;