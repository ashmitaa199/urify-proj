import React from "react";
import wrings from "../assets/wrings.png"
import iphone from "../assets/iphone3.png"
import bg1 from "../assets/bg1.png"
export default function Page8(){
    return(
        
        <section  class=" md:flex md:py-8  md:mt-32">
          
          <section class="bg-black w-4/5 h-4/5 absolute left-32 justify-self-center z-50">
            <div class="text-white absolute mt-28 ml-16 text-5xl">
              Ready to get started?
            </div>
            <div class="absolute mt-48 ml-16">
              <p class="text-white">Risus habitant leo egestas mauris diam eget morbi tempus<br/> vulputate.</p>
            </div>
            <button class="bg-white rounded w-44 h-12 absolute mt-64 left-20 font-semibold"> 
              Download App<i class="fa-brands fa-apple px-1"></i>
            </button>
            <div class="absolute left-3/4  rotate-180">
              <img class="md:-mt-2"src={bg1}/>
            </div>
            <div class="  ">
              <img class=" absolute w-96 h-full z-10 right-0 mt-0"src={iphone}/>
              
              <img class="absolute w-64 mt-52 z-0"src={wrings}/>
           
   
            </div>
           
           </section>

        </section>
    )
}