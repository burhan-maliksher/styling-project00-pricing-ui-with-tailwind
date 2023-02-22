import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main  className='flex relative flex-col  items-center min-h-screen min-w-screen bg-gray-50  font-jacques_Francois'>
      <header className='bg-emerald-300 text-blue-800 px-4 sm:px-0 items-left sm:items-center flex flex-col w-screen h-80 font-jacques_Francois'>
        <div className=" font-bold border-solid text-2xl mt-16 sm:text-4xl">
          <h1 className={`${styles.textStroke} ${styles.headingshadow}`}>
           Simple pricing for your business
          </h1>
        </div>
        <h4 className='sm:text-xl mt-2 text-sm'>
          Plans that are carefully crafted to suit your business.
        </h4>
      </header>
      <div  className='drop-shadow-[20px_10px_2px_rgba(0,0,0,0.25)] bg-purple flex flex-col absolute rounded-xl mt-48 w-5/6 h-auto pb-6 lg:pb-0 lg:flex-row lg:h-72 lg:w-3/4'>
        <div className=' flex flex-col items-center lg:w-80 pt-9'>
          <h4 className='text-xl'>
            Premium PRO
          </h4>
          <h1 className='text-5xl lg:text-6xl'>
            <span className='text-yellow-400'>$</span>320
          </h1>
          <h4 className={`pt-8 text-emerald-300  font-bold pb-1 font-inspiration text-3xl`}>
            billed just Once
          </h4>
          <button className='drop-shadow-[5px_10px_4px_rgba(0,0,0,0.25)] bg-emerald-300 hover:bg-emerald-400  rounded-md text-blue-800 sm:px-10 sm:py-2 sm:text-xl px-8 py-1 text-base'>
            Get Started
          </button>
        </div>
        <div className='flex flex-col w-auto justify-center mt-4 lg:mt-0 items-left border-t-4 lg:border-l-4 lg:border-t-0 rounded-xl lg:h-72 lg:px-4 lg:text-base font-imprima text-sm h-auto px-3 pt-4 lg:pt-0'>
          <p className='pb-8 text-center lg:text-left'>
            Access these features when you get this pricing package for your business
          </p>
          <p className='pb-3 flex flex-row  md:pl-36 lg:pl-0 '>
            <Image src="/check_circle_FILL0_wght400_GRAD0_opsz48 (1).svg" alt='check icon' width={20} height={20}/>
            <span className='pl-4'>International Calling and Messaging API</span>
          </p>
          <p className='pb-3  flex flex-row md:pl-36 lg:pl-0'>
            <Image src="/check_circle_FILL0_wght400_GRAD0_opsz48 (1).svg" alt='check icon' width={20} height={20}/>
            <span className='pl-4'>Additional Phone Numbers</span></p>
          <p className='pb-3   flex flex-row md:pl-36 lg:pl-0'>
            <Image src="/check_circle_FILL0_wght400_GRAD0_opsz48 (1).svg" alt='check icon' width={20} height={20}/>
            <span className='pl-4'>Automatic Messaging Via Zippier</span></p>
          <p className='pb-3   flex flex-row md:pl-36 lg:pl-0'>
            <Image src="/check_circle_FILL0_wght400_GRAD0_opsz48 (1).svg" alt='check icon' width={20} height={20}/>
            <span className='pl-4'>24/7 Support and Consulting</span></p>
        </div>
      </div>
      <footer className='flex flex-col lg:flex-row mt-96 lg:mt-56 items-left lg:items-center  text-black font-imprima  font-bold xl:text-base lg:text-xs'>
         <div className='flex flex-row mt-4 lg:mt-0'>
          <span className="mr-0 drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)] w-18 h-20 pl-8">
            <Image src="/workspace_premium_FILL0_wght400_GRAD0_opsz48 (1).svg" alt='guarantee' width={40} height={40}/>
          </span>
          <span className='mr-0 pl-6 lg:w-40 pr-6 lg:pr-0'>
            30 Days money back Guarantee
          </span>
        </div>
        <div className='flex flex-row mt-4 lg:mt-0'> 
          <span className='mr-0 drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)] w-18 h-20 pl-8'>
            <Image src="/settings_accessibility_FILL0_wght400_GRAD0_opsz48.svg" alt='hassle free' width={40} height={40}/>
          </span>
          <span className='mr-0 lg:w-36 pl-6 pr-6 lg:pr-0'>
            No Setup fees 
            100% hassle-free
          </span>
        </div>
        <div className='flex flex-row mt-4 lg:mt-0'>  
          <span className='mr-0 drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)] w-20 h-20 pl-8'>
            <Image src="/payments_FILL0_wght400_GRAD0_opsz48.svg" alt='payment' width={40} height={40}/>
          </span>
          <span className=' mr-0 lg:w-48 pl-6 pr-6 lg:pr-0 '>
            No Monthly Subscription 
            Pay once and for all
          </span>
        </div>  
      </footer>
    </main>
  )
}
