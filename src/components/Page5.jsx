import React from "react";
export default function Page5(){
    return(
        <section class=" md:flex md:py-0  md:mt-5">
          <section class="md:absolute md:left-[530px] md:flex-col ">
            <span class="md:ml-20 md:text-sm">Testimonials</span>
            <p class=" md:ml-5 md:font-extrabold md:text-3xl text-center mt-0">What Our Users <br/>Say About Us?</p>
          
          </section>
          
       
          <div class="flex flex-wrap w-1/2 md:mt-8">

          <img class=" absolute left-36 mt-32 w-[400px] h-[400px] z-0 " src="/src/assets/bg1.png"/>
          <img class=" absolute left-24 w-[500px] h-[550px] z-10" src="/src/assets/rings.png"/>
          <img class=" absolute md:left-64 md:mt-36 md:w-[300px] md:h-[300px] z-20" src="/src/assets/mcent.png"/>
          <img class=" absolute md:left-1/3 md:mt-60 md:w-[50px] md:h-[50px] z-20" src="/src/assets/circle.png"/>
          <img class=" absolute md:left-[434px]  md:mt-64 md:w-[25px] md:h-[20px] z-20" src="/src/assets/sym.png"/>
          <img class=" absolute md:left-36 md:mt-16 md:w-[250px] md:h-[250px] z-20" src="/src/assets/c-1.png"/>
          <img class=" absolute md:left-96 md:mt-14 md:w-[290px] md:h-[290px] z-20" src="/src/assets/c-2.png"/>
          <img class=" absolute md:left-40 md:mt-80 md:w-[250px] md:h-[250px] z-20" src="/src/assets/c-3.png"/>
          <img class=" absolute md:left-96 md:mt-80 md:w-[290px] md:h-[290px] z-20" src="/src/assets/c-4.png"/>
          
          

          </div>
          <div class=" relative w-1/2 left-24 mt-40">
          <div class="flex text-sm font-semibold mt-4 w-80">
           
            <span class="text-lg font-extrabold">The Best Financial Accounting <br/>App Ever!</span></div>
            <p class="text-sm text-slate-500 text-[16px] mt-3">
            Arcu at dictum sapien, mollis. Vulputate sit <br/>id accumsan, ultricies. In ultrices malesuada elit <br/>mauris etiam odio. Duis tristique lacus, 
            <br/>et blandit viverra nisl velit. Sed mattis rhoncus, <br/>diam suspendisse sit nunc, gravida eu. <br/>Lectus eget eget ac dolor neque lorem sapien,<br/> suspendisse aliquam.
            </p>
            <section class="md:flex">
              <div><img class="w-10 h-6 rounded-full px-2" src="/src/assets/1man.png"/></div>
              <div><img class="w-30 h-6 " src="/src/assets/grpman.png"/></div>
            </section>
            <span class="absolute left-3 py-4 text-sm font-bold shadow-slate-700">Nick Jonas</span>
          </div>
        </section>
    )
}