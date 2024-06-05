import React from "react";
import star from "../assets/Star.png"
import bg1 from "../assets/bg1.png"
import rings from "../assets/rings.png"
import iph3 from "../assets/iph3.png"
import visa from "../assets/visa.png"
import cstar from "../assets/cstar.png"
export default function Page4(){
    return(
      <section class=" flex py-24 mt-20 lg:mt-24">
        <img class=" absolute left-4 mt-2 w-2   z-20 rotate-45 " src={star}/>
          <div class="flex flex-wrap w-1/2">

          <img class=" absolute left-20 w-[400px] h-[400px] z-0 rotate-180" src={bg1}/>
          <img class=" left-20 w-[500px] h-[550px] z-10" src={rings}/>
          <img class=" absolute left-52 z-20  w-96 h-auto " src={iph3} alt="Image 1"/>
          <img class=" absolute mt-32 w-60 left-[300px] z-30" src={visa} alt="Image 1"/>
          </div>
          <div class=" relative w-1/2 left-0 mt-52">
          <div class="flex text-sm font-semibold mt-4">
            <img class=" w-8 h-7"src={cstar}/>
            <span class="text-lg font-bold px-1">Fully Customizable</span></div>
            <p class="text-sm text-slate-500 ml-3 text-[16px] mt-3">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. <br/>In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, 
            <br/>et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse<br/> sit nunc, gravida eu. Lectus eget eget ac dolor neque <br/>lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </section>
    )
}