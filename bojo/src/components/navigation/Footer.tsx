import React from 'react';
import Image from 'next/image';
import Link  from 'next/link';


export default function FooterBar() {

  return (
    <footer className = "bg-white text-white" p-10>
      <div className="">
        <div>
          <Image 
            
            src="/bojo.svg"
            alt="Bojo Logo"
            width={150}
            height={50}
            >

          </Image>
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