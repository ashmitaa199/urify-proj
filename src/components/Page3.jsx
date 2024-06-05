import React from "react";
import st from "../assets/Star.png"
import bell from "../assets/bell.png"
import bg from "../assets/bg1.png"
import rings from "../assets/rings.png"
import iph3 from "../assets/iph3.png"
export default function Page3(){
    return (
        <section class=" md:flex md:py-16 md:mt-20 md:-ml-20  ">
        <img class=" md:absolute md:left-4 md:mt-2 md:w-2 left-1 mt-10 w-10 z-20 rotate-45 " src={st}/>
          
          <div class=" md:relative md:w-1/2 md:left-48 md:mt-20 ">
            <span class="text-red-500 text-lg">Advantages</span>
            <h1 class="font-bold text-4xl">Why Choose Uifry?</h1>
            <div class="flex text-sm font-semibold mt-4">
            <img class=" w-8 h-7"src={bell}/>
            <span class="text-lg font-bold px-1">Clever Notification</span></div>
            <p class="text-sm text-slate-500  text-[16px] mt-5">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan,<br/> ultricies. In ultrices malesuada elit mauris etiam odio.<br/>
             Duis tristique lacus, et blandit viverra nisl velit. Sed mattis <br/>rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget <br/>eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
    
          </div>

          <div class="hidden md:flex md:w-1/2">
    <img class="md:absolute md:right-48 md:w-[400px] md:h-[400px] z-0 absolute right-28" src={bg} />
    <img class="md:absolute md:right-20 md:w-[500px] md:h-[550px] z-10 absolute right-10" src={rings} />
    <img class="md:absolute md:right-20 z-20 md:w-96 md:h-auto absolute right-10" src={iph3} alt="Image 1" />
</div>

        </section>
    )
}