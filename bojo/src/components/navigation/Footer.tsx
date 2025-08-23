import React from 'react';
import Image from 'next/image';
import Link  from 'next/link';
// import NewsletterSection from '@/components/newsletter/newsletter';  -- Not being used


export default function FooterBar() {

  return (
    <footer className = "bg-white text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Bojo Resort Logo Placement */}
        <div>
          <Image src="/bojo.svg" alt="Bojo Logo" width={175} height={50} className="mb-2"/>
          <p className='text-black'> Bojo Resort - Circa 1994 </p>
        </div>
        
        {/* Kontak Information */}
        <div>
          <Link href="/kontakt">
            <h3 className="font-bold text-black mb-1 cursor-pointer hover:underline"> Kontakt </h3>
          </Link>
          <ul>

            {/* Phone Number */}
            <li>
              <span className="hover:underline text-black"> 
                +355 69 20 79 023 
              </span>
            </li>

            {/* Email */}
            <li>
              <Link href="/kontakt">
                <h3 className="text-black mb-1 cursor-pointer hover:underline">  
                  info@bojoresort.al 
                </h3>
              </Link>
            </li>

            {/* Address */}
            <li>
              <h3 className="text-black mb-1 cursor-pointer hover:underline"> 
                Bojo Resort<br></br>
                Orikum, Albania
              </h3>
            </li>

            {/* Social Links */}
            <ul className="flex space-x-1">              
              
              {/* Instagram */}
              <li>                
                <Link href="https://www.instagram.com/resortibojo/"
                      target='_blank'
                      color="black"
                  >
                    <Image
                      className=" text-black"
                      src="/instagram.svg"
                      alt="Instagram Logo"
                      width={20}
                      height={20}
                    />
                </Link>                
              </li>

              {/* Facebook */}      
              <li>                
                <Link href="https://www.facebook.com/profile.php?id=100080190497521#"
                      target='_blank'
                  >
                    <Image
                      className=" text-black"
                      src="/facebook.svg"
                      alt="Facebook Logo"
                      width={20}
                      height={20}
                    />
                  
                </Link>
              </li>            
            </ul>

          </ul>
        </div>
        
        
        {/* Newsletter */}
        <div>
          <ul>
              {/* Working Progress */}
             
          </ul>
        </div>
      </div>
      
      {/* Disclaimers */}
      <div className="text-black text-center">
        <ul>
          <li>
            <p>{new Date().getFullYear()}&copy; Copyright Bojo Resort</p>
          </li>

          {/* Credits */}
          <li>            
            <Link
                className="text-black text-center hover:underline"
                href="https://github.com/IslamiTP"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered By IslamiTP
              </Link> 
          </li>
        </ul>
      </div>
    
    </footer>   
  );
  
}