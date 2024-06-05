import React from "react";
import bg from "../assets/bg1.png"
import st from "../assets/Star.png"
import rings from "../assets/rings.png"
import iph3 from "../assets/iph3.png"
import str2 from "../assets/star2.png"
import cube from "../assets/cube.png"
import icon from "../assets/icon.png"


export default function Page2(){
    return(
        <div>
            <section class=" md:flex md:py-2 md:mt-0">
        <img class=" absolute md:left-4 md:mt-2 md:w-2 left-10 mt-10 w-10 z-20 rotate-45 " src={st}/>
        <div class="hidden md:flex md:w-1/2 ml-1">
    <img class="md:absolute md:left-20 md:w-[400px] md:h-[400px] md:mt-0 z-0 rotate-180 absolute left-10" src={bg} />
    <img class="md:absolute md:left-20 md:w-[500px] md:h-[550px] z-10 absolute -ml-10 w-[300px] h-[300px]" src={rings} />
    <img class="md:absolute md:left-52 z-20 w-96 h-auto absolute" src={iph3} alt="Image 1" />
</div>
          <div class=" md:relative  md:w-1/2  md:left-0  md:mt-12 ">
            <span class="text-red-500 text-lg">Features</span>
            <h1 class="font-bold text-4xl">Uifry Premium</h1>
            <div class="flex text-sm font-semibold mt-4">
            <img class="px-1 w-7 h-5"src={str2}/>
            <span>Budgeting Intervals</span></div>
            <p class="text-sm text-slate-500 ml-3 text-[16px] mt-3">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br/>faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

            <div class="flex text-sm font-semibold mt-4">
            <img class="px-1 w-7 h-5"src={cube}/>
            <span>Budgeting Intervals</span></div>
            <p class="text-sm text-slate-500 text-[16px] ml-3 mt-3">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br/>faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

            <div class="flex text-sm font-semibold mt-4">
            <img class="px-1 w-7 h-5"src={icon}/>
            <span>Budgeting Intervals</span></div>
            <p class="text-sm text-slate-500 text-[16px] ml-3 mt-3">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br/>faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

          </div>
        </section>
        </div>
       
    )
}