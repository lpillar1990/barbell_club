import Image from 'next/image';
import Logo from '../public/barbell-logo2.png';
import { BsFacebook } from 'react-icons/bs';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
          <div className="py-10 max-w-7xl sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16">
              <Image src={Logo} alt="North Down Barbell Club logo" width={200} height={150} priority />
      </div>
          </div>
  );
}
