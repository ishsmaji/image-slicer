import React, { useState } from 'react'
import { FaChevronLeft ,FaChevronRight} from "react-icons/fa";

const Imageslider = ({images}) => {
    const[index,setIndex]=useState(0);

    function handelprevious(){
        setIndex((index)=>(index===0?images.length-1:index-1))
    }

    function handelnext(){
        setIndex((index)=>(index==images.length-1?0:index+1))
    }


  return (
    <div className='flex  items-center justify-center'>
        <button onClick={handelprevious} className='w-[40px] '> 
          <FaChevronLeft/>
        </button>
        <div>
           <img
            src={images[index]}
            alt='This is Image'
            className='h-[400px] w-[400px] flex items-center justify-center'
           />
        </div>
        <button onClick={handelnext} className='w-[40px] px-5'>
           <FaChevronRight/>
        </button>
    </div>
  )
}

export default Imageslider