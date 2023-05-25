import React from "react";
import CrowdFunding from "../assets/CrowdfundingImg.png";
import Aify from "../assets/AifyImg.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#061337]">

      {/* container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600  hover:border-white hover:text-pink-600 duration-300'>Work</p>
          <p className='py-6 text-xl font-semibold text-slate-300'>Here are some of my projects</p>
        </div>

        {/* div(container) for the card items basically a grid */}
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"> 
          
          {/* Item 1 */}
          <div style={{backgroundImage:`url(${CrowdFunding})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "> 
              {/* content-div is a special name to add custom css : erfer : index.css */}
      
            <div className="opacity-0 group-hover:opacity-100" >
              <span className="text-2xl font bold text-white tracking-wider ">
                DeCentralized CrowdFunding
              </span>

              <div className="pt-8 ">
                <a href="https://nimble-fairy-ac3a0f.netlify.app/" target="_blank" title="Hosted WebSite"  rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-400 hover:text-white duration-300">Link To Project</button>
                </a>
              </div>

            </div>
          
          </div>
          
          {/* Item 2 */}
          <div style={{backgroundImage:`url(${Aify})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">  {/* content-div is a special name to add custom css : erfer : index.css */}
      
            <div className="opacity-0 group-hover:opacity-100" >
              <span className="text-2xl font bold text-white tracking-wider ">
                AI Text To Image
              </span>

              <div>
                <a href="https://merry-creponne-7c2ecd.netlify.app/" target="_blank" title="Hosted WebSite" rel="noreferrer">
                <button className=" text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-400 hover:text-white duration-300">Link To Project</button>
                </a>
              </div>

            </div>
          
          </div>
       
        </div>

      </div>

    </div>
  );
};

export default Work;
