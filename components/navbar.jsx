import Image from 'next/image';
import Logo from '../public/images/logo2.png';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import React from 'react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
          <div className="py-10 max-w-7xl ">
            <div className="flex items-center justify-between h-16 ">
        <Image src={Logo} alt="North Down Barbell Club logo" width={300} height={160} priority />
        <a className="text-red-500 hover:text-gray-500">
          <BsFacebook className="w-11 h-11" href="/https://www.facebook.com/NorthDownBarbellClub" />
        </a>
        <a className="text-red-500 hover:text-gray-500">
        <BsInstagram className="w-12 h-12" href="/https://www.facebook.com/NorthDownBarbellClub" />
            </a>
      </div>
          </div>
  );
}
