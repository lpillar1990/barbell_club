import Image from 'next/image';
import Logo from '../public/images/logo2.png';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import React from 'react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
<nav class="bg-black border-gray-200 px-2 sm:px-4 dark:bg-gray-800  flex justify-between">
  <div class="container flex flex-wrap items-center pr-13">
        <Image src={Logo} alt="North Down Barbell Club logo" width={230} height={120} priority />
        </div>
    <div class=" w-full md:w-auto flex my-5" id="mobile-menu">
      <ul class="flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium px-4">
          <a className="text-red-500 cursor-pointer hover:text-gray-500">
          <BsFacebook className="w-10 h-10"/>
          </a>
        </ul>
        <ul class="flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium px-4">
        <a className="text-red-500 cursor-pointer hover:text-gray-500">
          <BsInstagram className="w-10 h-10" href="/https://www.facebook.com/NorthDownBarbellClub" />
          </a>
        </ul>
  </div>
</nav>
  );
}
