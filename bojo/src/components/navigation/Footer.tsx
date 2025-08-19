import React from 'react';
import Image from 'next/image';
import Link  from 'next/link';


export default function FooterBar() {

  return (
    <footer className = "bg-white text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Bojo Resort Logo Placement */}
        <div>
          <Image src="/bojo.svg" alt="Bojo Logo" width={175} height={50} className="mb-2"/>
          <p className='text-black'>Bojo Resort - Circa 1994 </p>
        </div>
        
        <div>
          <Link href="/kontakt">
            <h3 className="font-bold text-black mb-1 cursor-pointer hover:underline"> Kontakt </h3>
          </Link>
          <ul>
            <li>
              <span className="hover:underline text-black"> +355 69 20 79 023 </span>
            </li>
            <li>
              <Link href="/kontakt">
                <h3 className="text-black mb-1 cursor-pointer hover:underline">  info@bojoresort.al </h3>
              </Link>
            </li>
          </ul>
        </div>


      </div>
    
    </footer>   
  );

}



// <p>© Copyright 2019 Bojo Resort. All Rights Reserved.</p>
      
//       <Link
//         className="flex items-center gap-2 hover:underline hover:underline-offset-4
//           text-foreground "
//         href="https://github.com/IslamiTP"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Powered By IslamiTP
//       </Link>