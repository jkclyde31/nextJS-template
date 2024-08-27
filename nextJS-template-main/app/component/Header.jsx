"use client";


import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import PrimaryButton from './PrimaryButton';
import Navbar from './Navbar';




export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[url('/img/bgs/bg-banner.png')] bg-cover bg-center text-[#222] min-h-[900px] ">
      <div className='max-w-[1720px] w-full mx-auto   '>
         {/* NAVBAR ==========================================================================================================*/}
          <Navbar/>
        
          {/* Mobile menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-gray-700 px-4 py-2">
              <Link href="/" className="block py-2 hover:text-gray-300">Home</Link>
              <Link href="/about" className="block py-2 hover:text-gray-300">About</Link>
              <Link href="/contact" className="block py-2 hover:text-gray-300">Contact</Link>
            </nav>
          )}

          {/* BANNER ===================================================================================================*/}
          <div id="banner" className='px-2'>
            <Link href="/" className="block md:hidden pt-[44px] pb-[44px]">
              <Image src="/img/logo.png" alt="Logo" width={253} height={174} className='mx-auto'/>
            </Link>
            <div className="tablet:text-center tablet:mx-auto txt max-w-[728px]">
               <p className='font-nunito text-[16px] text-[#444] pb-[15px] md:pb-[25px] leading-[120%]'>AT ARIZONA INTERIOR CONSTRUCTION</p>
               <h1 className='font-poppins-l text-[20px] xs:text=[25px] sm:text-[30px] md:text-3xl lg:text-[40px] pb-[18px] text-[#1F1F1F] leading-[120%]'>

                We Take Great Pride in Providing
              <span className='block font-poppins-m'>The Highest Quality Workmanship</span>
              </h1>
              <p className='font-nunito text-[16px] pb-[30px]  text-[#444] leading-[120%]'>
              With over 15 years in the industry, we have the skills, knowledge, and experience to transform the countertops and cabinets in your kitchen, bathrooms, laundry room, office, workshop, and outdoor living space.
              </p>
              {/* <button className="bg-gradient-to-b from-[#373737] to-[#000000] text-white text-[15px]  font-nunito font-bold py-4 px-[50px] rounded-sm shadow-md hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
                FREE ESTIMATE
              </button> */}
            <div className="buttons flex flex-col sm:flex-row max-w-[432px] justify-between items-center tablet:mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <PrimaryButton text="FREE ESTIMATE" className="w-full sm:w-auto" />
              <div className="left flex justify-between items-center max-w-[190px] w-full">
                <Image src="/img/icons/phone.png" alt="Phone Icon" width={57} height={57}/>
                <div>
                  <p className='font-nunito text-[14px]'>Call Us Now</p>
                  <p className='font-roboto text-[18px]'>602-509-1242</p>
                </div>
              </div>
            </div>

            </div>
          </div>
      </div>
    </header>
  );
}