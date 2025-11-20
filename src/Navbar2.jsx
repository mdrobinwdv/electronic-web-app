import React from 'react'

function Navbar2() {
  return (
    <>
      <div className=' w-full h-[100px]  '>
          <div className=" container mx-auto h-[100px] bg-[#FFFFFF] flex justify-center items-center mt-5 ">
          <ul className=" w-full h-full flex justify-start items-center px-5 gap-10 text-3xl font-bold bg-[#8cb8c9] text-black ">
               <a href="#">Hero Section</a>
               <a href="#">Categories Section</a>
               <a href="#">Special Offers</a>
               <a href="#">Brands</a>
               <a href="#">Featured Products</a>
          </ul>
      </div>
      </div>
    </>
  )
}

export default Navbar2
