import React from 'react'
import Link from 'next/link'
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";
function HeroSection  () {
  return (
    <div className='text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'> 
     <div className='p-4 relative z-10 w-full text-center'>
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <h1  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
    
            Master of software developement
        </h1>
            <p>
        Mastering software development entails a comprehensive approach, encompassing technical prowess, problem-solving acumen, and effective collaboration. It involves proficiency in programming languages, adeptness with algorithms and data structures, and familiarity with software design patterns. Moreover, mastering version control systems like Git, along with testing and debugging techniques, is crucial. Beyond these technical aspects, a skilled developer should grasp frameworks and libraries, understand database management, and excel in web and mobile development. Embracing continuous integration and deployment practices, agile methodologies, and soft skills such as communication and teamwork further enhance one's capabilities. Lastly, a commitment to continuous learning ensures staying abreast of industry trends and emerging technologies, fostering expertise and adaptability in the dynamic field of software development.
        </p>
        <div className='"mt-4'>
            <Link href="/allcourses">
               <Button 
               borderRadius='1.75rem'
               className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"

               >
               Explore courses
               </Button>
            </Link>
        </div>
       
     </div>
    </div>
  )
}

export default HeroSection
