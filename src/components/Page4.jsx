import React from "react";
export default function Page4(){
    return(
      <section class=" flex py-24 mt-20 lg:mt-24">
        <img class=" absolute left-4 mt-2 w-2   z-20 rotate-45 " src="/src/assets/Star.png"/>
          <div class="flex flex-wrap w-1/2">

          <img class=" absolute left-20 w-[400px] h-[400px] z-0 rotate-180" src="/src/assets/bg1.png"/>
          <img class=" left-20 w-[500px] h-[550px] z-10" src="/src/assets/rings.png"/>
          <img class=" absolute left-52 z-20  w-96 h-auto " src="/src/assets/iph3.png" alt="Image 1"/>
          <img class=" absolute mt-32 w-60 left-[300px] z-30" src="/src/assets/visa.png" alt="Image 1"/>
          </div>
          <div class=" relative w-1/2 left-0 mt-52">
          <div class="flex text-sm font-semibold mt-4">
            <img class=" w-8 h-7"src="/src/assets/cstar.png"/>
            <span class="text-lg font-bold px-1">Fully Customizable</span></div>
            <p class="text-sm text-slate-500 ml-3 text-[16px] mt-3">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. <br/>In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, 
            <br/>et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse<br/> sit nunc, gravida eu. Lectus eget eget ac dolor neque <br/>lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </section>
    )
}