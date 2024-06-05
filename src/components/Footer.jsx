import React from "react";
import vector from "../assets/Vector.png"
export default function Footer(){
    return(
        <section class=" flex py-32 mt-20 md:mt-80 md:w-full">
          
        <footer class="flex flex-row justify-self-center gap-3 w-full ml-10 px-32">
          <div class="flex-col">
          <div class="flex w-1/5">
              <span> 
              <img class="w-5 py-1 "src={vector}/>
              </span>
              <span class="text-xl font-bold">uifry
              </span>
              
            </div>
            <div class="text-xs w-1/6 py-2 font-semibold">
                Help@Frybix.com
              </div>
              <div class="text-xs w-1/6 font-semibold">
               +911234567
              </div>
              
          </div>
           
            <div class="w-1/5"><li class="text-[23px] font-semibold list-none px-6 flex-col">Links</li>
            <div class="text-xs px-7 py-4 font-semibold">
                Home
              </div>
              <div class="text-xs  px-7 font-semibold">
               About Us
              </div>
              <div class="text-xs px-7 py-4 font-semibold">
                Bookings
              </div>
              <div class="text-xs px-7 font-semibold">
                Blog
              </div>
              
            </div>
            <div class="w-1/5"><li class="text-[23px] font-semibold list-none">Legal</li>
            <div class="text-xs px-1 py-4 font-semibold">
                Terms of Use
              </div>
              <div class="text-xs  px-1 font-semibold">
               Privacy Policy
              </div>
              <div class="text-xs px-1 py-4 font-semibold">
                Cookie Policy
              </div>
            </div>
            <div class="w-1/5"><li class="text-[23px] font-semibold list-none">Product</li>
            <div class="text-xs px-5 py-4 font-semibold">
                Take Tour
              </div>
              <div class="text-xs  px-5 font-semibold">
               Live Chat
              </div>
              <div class="text-xs px-5 py-4 font-semibold">
                Riviews
              </div>
            </div>
            <div class="w-1/5"><li class="text-[23px] font-semibold list-none">Newsletter</li>
            <div class="text-xs px-3 py-4 font-semibold">
                Stay Up To Date
              </div>
              <div class="text-xs px-7 py-5 font-semibold text-gray-500">
                Your Email
              </div>
            </div>
            <button class="text-white bg-black h-10 px-3 mt-24">
              Subscribe
            </button>
       
          </footer>
          
     
        </section>
    )
}