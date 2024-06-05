import React from "react"
import vec from "../assets/Vector.png"
import st from "../assets/Star.png"
export default function Nav(){
    return (
        
        <nav className="md:w-full md:h-10 md:flex md:px-2 md:py-2 md:ml-20">
            
        <div className="flex" >
           <img src={vec} className="nav--logo" />
           
           <span className="font-extrabold text-lg">uifry</span>
        </div>
            <div className="flex ml-16 gap-5 p-1 font-semibold">
                
            <h2 >Home</h2>
            <h2>AboutUs</h2>
            <h2>Pricing</h2>
            <h2>Features</h2>
            </div>
            
            <div className='btn-con'>
             <button className='btn'>Download</button>
             <div className="str1 rotate-45"><img src={st} /></div>
            </div>
            
        
        </nav>
    )
}