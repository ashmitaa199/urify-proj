import React from "react";
export default function Page2(){
    return(
        <div>
            <section class=" md:flex md:py-2 md:mt-0">
        <img class=" absolute md:left-4 md:mt-2 md:w-2 left-10 mt-10 w-10 z-20 rotate-45 " src="/src/assets/Star.png"/>
          <div class="md:flex  md:w-1/2 ml-1">

          <img class=" md:absolute md:left-20 md:w-[400px] md:h-[400px] md:mt-0 z-0 rotate-180 absolute left-10  " src="/src/assets/bg1.png"/>
          <img class=" md:absolute md:left-20 md:w-[500px] md:h-[550px] z-10 absolute -ml-10 w-[300px] h-[300px]" src="/src/assets/rings.png"/>
          <img class=" md:absolute md:left-52 z-20  w-96 h-auto absolute  " src="/src/assets/iph3.png" alt="Image 1"/>
          </div>
          <div class=" md:relative  md:w-1/2  md:left-20  md:mt-10 relative w-1/2 left-10 mt-5 ml-60">
            <span class="text-red-500 text-lg">Features</span>
            <h1 class="font-bold text-4xl">Uifry Premium</h1>
            <div class="flex text-sm font-semibold mt-4">
            <img class="px-1 w-7 h-5"src="/src/assets/star2.png"/>
            <span>Budgeting Intervals</span></div>
            <p class="text-sm text-slate-500 ml-3 text-[16px] mt-3">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br/>faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

            <div class="flex text-sm font-semibold mt-4">
            <img class="px-1 w-7 h-5"src="/src/assets/cube.png"/>
            <span>Budgeting Intervals</span></div>
            <p class="text-sm text-slate-500 text-[16px] ml-3 mt-3">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br/>faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

            <div class="flex text-sm font-semibold mt-4">
            <img class="px-1 w-7 h-5"src="/src/assets/icon.png"/>
            <span>Budgeting Intervals</span></div>
            <p class="text-sm text-slate-500 text-[16px] ml-3 mt-3">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br/>faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

          </div>
        </section>
        </div>
       
    )
}