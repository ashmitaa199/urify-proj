import React from "react";
import wrings from "../assets/wrings.png"
import iphone from "../assets/iPhone3.png"
import bg1 from "../assets/bg1.png"
export default function Page8(){
    return(
        
        <section  class=" flex py-3 px-0 mt-16 md:flex md:py-8  md:mt-32">
          
          <section class="bg-black w-full h-[350px] absolute left-10 justify-self-center z-50 md:bg-black md:w-4/5 md:h-4/5 md:absolute md:left-44 md:justify-self-center  md:z-50">
            <div class=" text-white absolute mt-14 ml-8 text-3xl md:text-white md:absolute md:mt-28 md:ml-16 md:text-5xl">
              Ready to get started?
            </div>
            <div class="absolute mt-24 ml-8 md:absolute md:mt-48 md:ml-16">
              <p class="text-white md:text-white">Risus habitant leo egestas mauris diam eget morbi tempus<br/> vulputate.</p>
            </div>
            <button class="bg-white rounded w-22 h-6 absolute top-44 left-5 md:bg-white md:rounded md:w-44 md:h-12 md:absolute md:mt-32 md:left-20 md:font-semibold"> 
              Download App<i class="fa-brands fa-apple px-1"></i>
            </button>
            <div class="md:absolute md:left-3/4  md:rotate-180">
              <img class="hidden md:block md:-mt-2"src={bg1}/>
            </div>
            <div class="  ">
              <img class="absolute w-44 h-64 z-10 right-0 mt-20 md:absolute md:w-96 md:h-full md:z-10 md:right-0 md:mt-0"src={iphone}/>
              
              <img class="hidden md:absolute md:w-64 md:mt-52 md:z-0"src={wrings}/>
           
   
            </div>
           
           </section>

        </section>
    )
}