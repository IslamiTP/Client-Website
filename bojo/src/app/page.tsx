
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/bojo.svg"
          alt="Bojo Resort logo"
          width={200}
          height={38}
          priority
        />

        <div className="flex gap-1 items-center flex-col sm:flex-row">
            <Link
              href="/kryefaqja"
              className="rounded-full border border-solid border-transparent transition-colors 
              flex items-center justify-center
               bg-[#DCCBB3] text-background gap-2 hover:bg-[#383838] dark:bg-white dark:hover:bg-[#ccc] 
              font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-50"
              target="_blank"
              rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logo mark"
                  width={20}
                  height={20}
                />
                Visito  
            </Link>
        </div>
      </main>
      
      {/*  ==============================  Footer  ==============================   */}

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4
            text-foreground "
          href="/kontakt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
        
        {/* Credits */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4
            text-foreground "
          href="https://github.com/IslamiTP"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered By IslamiTP
        </a>

      </footer>
    </div>
  );
}
