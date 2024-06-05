import React from "react";
import star from "../assets/Star.png"
import bg1 from "../assets/bg1.png"
import rings from "../assets/rings.png"
import iph3 from "../assets/iph3.png"
import visa from "../assets/visa.png"
import cstar from "../assets/cstar.png"
export default function Page4(){
    return(
      <section class="flex flex-col lg:flex-row lg:mt-24 mt=12">
    <img class="absolute left-4 mt-2 w-2 z-20 rotate-45" src={star} />
    
    <div class="order-2 lg:order-1 flex flex-wrap w-full lg:w-1/2 relative mt-8 lg:mt-0">
        <img class=" absolute left-10 w-[200px] h-[400px] lg:absolute lg:left-0 lg:w-[400px] lg:h-[400px] lg:z-0 lg:rotate-180 " src={bg1} />
        <img class="lg:left-20 lg:w-[500px] lg:h-[550px] lg:z-10" src={rings} />
        <img class=" absolute left-10 lg:absolute lg:left-20  lg:z-20  " src={iph3} />
        {/* <img class="lg:absolute lg:left-52 lg:z-20 lg:w-96 lg:h-auto" src={iph3} alt="Image 1" /> */}
        <img class=" mt-40 absolute left-10 lg:absolute lg:left-20 lg:z-30 lg:mt-40 lg:ml-20 " src={visa} />
        {/* <img class="lg:absolute lg:mt-32 lg:w-60 lg:left-[300px] lg:z-30" src={visa} alt="Image 1" /> */}
    </div>

    <div class="order-1 lg:order-2 relative w-full lg:w-1/2 lg:mt-64">
        <div class="flex text-sm font-semibold mt-4">
            <img class="w-8 h-7" src={cstar} />
            <span class="text-lg font-bold px-1">Fully Customizable</span>
        </div>
        <p class="text-sm text-slate-500 ml-3 text-[16px] mt-3">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            <br />In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            <br />et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            <br />sit nunc, gravida eu. Lectus eget eget ac dolor neque
            <br />lorem sapien, suspendisse aliquam.
        </p>
    </div>
</section>

    )
}