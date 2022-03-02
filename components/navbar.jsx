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
  <div class="container flex flex-wrap items-center mx-auto">
        <Image src={Logo} alt="North Down Barbell Club logo" width={230} height={120} priority />
        </div>
    <div class=" w-full md:w-auto flex my-5" id="mobile-menu">
      <ul class="flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <a className="text-red-500 cursor-pointer hover:text-gray-500">
          <BsFacebook className="w-11 h-11" href="/https://www.facebook.com/NorthDownBarbellClub" />
        </a>
        <a className="text-red-500 cursor-pointer hover:text-gray-500">
        <BsInstagram className="w-12 h-12" href="/https://www.facebook.com/NorthDownBarbellClub" />
            </a>
      </ul>
  </div>
</nav>
  );
}
