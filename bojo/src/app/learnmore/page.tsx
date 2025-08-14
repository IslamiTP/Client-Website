import Image from "next/image";

export default function LearnMore() {
    return(
        <div className ="">



        {/*  ==============================  Learn More Footer  ==============================   */}
        <footer className="" >
            <a
                className=""
                href = ""
                target ="_blank"
                rel ="noopener noreferrer"
            
            >
             <Image
                  aria-hidden
                  src="/file.svg"
                  alt="Instagram Logo"
                  width={16}
                  height={16}
             />
             Bojo Resort
            </a>

        </footer>
        
        </div>
    );
}