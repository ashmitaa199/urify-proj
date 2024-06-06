import React from "react";
import vector from "../assets/Vector.png"
export default function Footer(){
    return(
        <section class="  pt-44 mt-60 md:flex md:py-32   md:mt-80 md:w-full">
          
        <footer class=" flex flex-row justify-self gap-4 text-xs w-full px-3 -ml-1 centre md:flex md:flex-row md:justify-self-center md:gap-3 md:w-full md:ml-10 md:px-32">
          <div class="md:flex-col">
          <div class="md:flex md:w-1/5">
              <span> 
              <img class="md:w-5 md:py-1 "src={vector}/>
              </span>
              <span class="text-sm font-bold md:text-xl md:font-bold">uifry
              </span>
              
            </div>
            <div class=" text-xs md:text-xs md:w-1/6 md:py-2 md:font-semibold">
                Help@Frybix.com
              </div>
              <div class="md:text-xs md:w-1/6 md:font-semibold">
               +911234567
              </div>
              
          </div>
           
            <div class="md:w-1/5"><li class="font-semibold list-none md:text-[23px] md:font-semibold md:list-none md:px-6 md:flex-col">Links</li>
            <div class="md:text-xs md:px-7 md:py-4 md:font-semibold">
                Home
              </div>
              <div class="md:text-xs  md:px-7 md:font-semibold">
               About Us
              </div>
              <div class="md:text-xs md:px-7 md:py-4 fmd:ont-semibold">
                Bookings
              </div>
              <div class="md:text-xs md:px-7 md:font-semibold">
                Blog
              </div>
              
            </div>
            <div class="md:w-1/5"><li class="font-semibold list-none md:text-[23px] md:font-semibold md:list-none">Legal</li>
            <div class="md:text-xs md:px-1 md:py-4 md:font-semibold">
                Terms of Use
              </div>
              <div class="md:text-xs  md:px-1 md:font-semibold">
               Privacy Policy
              </div>
              <div class="md:text-xs md:px-1 md:py-4 md:font-semibold">
                Cookie Policy
              </div>
            </div>
            <div class="md:w-1/5"><li class="font-semibold list-none md:text-[23px] md:font-semibold md:list-none">Product</li>
            <div class="md:text-xs md:px-5 md:py-4 md:font-semibold">
                Take Tour
              </div>
              <div class="md:text-xs  md:px-5 md:font-semibold">
               Live Chat
              </div>
              <div class="md:text-xs md:px-5 md:py-4 md:font-semibold">
                Riviews
              </div>
            </div>
            <div class="md:w-1/5"><li class="font-semibold list-none md:text-[23px] md:font-semibold md:list-none">Newsletter</li>
            <div class="md:text-xs md:px-3 md:py-4 md:font-semibold">
                Stay Up To Date
              </div>
              <div class="md:text-xs md:px-7 md:py-5 md:font-semibold md:text-gray-500">
                Your Email
              </div>
            </div>
            <button class="text-white h-5 px-1 mt-12 bg-black md:text-white md:bg-black md:h-10 md:px-3 md:mt-24">
              Subscribe
            </button>
       
          </footer>
          
     
        </section>
    )
}