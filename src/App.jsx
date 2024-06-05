import React from 'react'
import './style.css'
import bg from "./assets/bg1.png"
import Nav from "./components/Nav"
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Footer from './components/Footer'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Page7 from './components/Page7'
import Page8 from './components/Page8'

function App() {
  return (
    <div class="font-sans">  
       <Nav/>
       {/*page1 */}
       <section className="str2 rotate-45 mt-4"><img src="./src/assets/Star.png" /></section>
        <div class="md:flex md:flex-row flex flex-col">

        <div class="md:w-1/2 md:flex md:flex-col">
        <div class="mt-0">
                 <div class="md:ml-32 ml-4">           
                  <div> <img class="z-0 w-[350px] ml-24 -mt-24 absolute "src={bg} alt="bgimage"/>
                   </div>
                  <div class="text-5xl font-bold relative top-0">
                    Make The Best <br/>
                      Financial Decisions
                  </div>
          
                 </div> 
                 
           <div class="md:text-sm md:mt-8 md:ml-32 ml-4 text-zinc-500 font-semibold">Cum et convallis risus placerat aliquam, nunc. Scelerisque Aliquet<br/>
           Faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
           </div>
           </div>
          
        
        <span class="md:relative md:left-32 md:mt-4 relative left-5 ">
           <button class="bg-black text-white w-32 py-2 px-2  rounded-md">Get Started <i class="fa-solid fa-arrow-right"></i></button>
           <button class="bg-transparent text-black  py-2 px-2 rounded-md "><i class="fa-sharp fa-regular fa-circle-play p-2"></i>Watch Video</button>
           <section className="str2 rotate-45 mt-4 ml-10"><img src="./src/assets/Star.png" /></section>
        </span>
        <div className="md:ml-28 md:-mt-20 -ml-5 -mt-0"><img class="w-full h-72"src="./src/assets/zig.png" /></div>
        </div>


        <div class="">
        <section class="relative ml:0">
            <img class=" md:absolute md:left-16 md:-top-24 w-4/5 md:mt-0 h-auto z-50 absolute top-20 left-0 " src="/src/assets/ip1.png" alt="Image 1"/>
            <img class=" md:absolute md:-top-16 md:left-40 w-4/5 h-auto z-40 absolute top-10 left-6" src="/src/assets/ip2.png" alt="Image 2"/>
            <img class=" md:relative md:-top-10 md:w-4/5 md:left-60  md:h-auto z-30 relative -top-0 left-10" src="/src/assets/ip1.png" alt="Image 3"/>
            
            <img class="md:absolute md:-top-24 md:left-32 md:w-[500px] md:h-[500px] z-0 absolute -top-14 left-7 w-[500px] h-[500px]" src="/src/assets/rings.png" alt="Image 1"/>
            <img class="md:absolute md:top-56 md:right-32 md:w-[300px] md:h-[300px] z-10 absolute top-64 right-16 w-[200px] h-[200px] rotate-180" src="/src/assets/bg1.png" alt="Image 1"/>
            <img class="absolute top-96 w-10 left-56 z-20 rotate-45" src="/src/assets/Star.png"/>
        </section>
        </div>
        </div>
        
        <Page2/>
        <Page3/>
        <Page4/>
       < Page5/>
        <Page6/>
        <Page7/>   
        <Page8/>
          <div>
          <img class="absolute mt-11 w-[300px] h-[300px] z-0 " src="/src/assets/bg1.png"/>
          </div>

        <Footer/>
         <div class="w-full flex flex-col justify-self-center ml-4 px-32 ">
         <hr class="h-px my-1 bg-gray-200 border-spacing-1 dark:bg-slate-700 px-36 justify-self-center "/> 
         <p class="ml-80 py-3 pb-5 text-xs justify-self-center">Copyright 2022 uifry.com all rights reserved</p>
         </div>
    </div>
  )
}

export default App
