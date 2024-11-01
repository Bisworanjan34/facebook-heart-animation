"use client"
import { faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import './Animation.css'

const Animation = () => {
    let [like,setLike]=useState(0)
    let heartRef=useRef(null)
    let clickfun = () => {
      
    heartRef.current.classList.toggle('active');
    console.log("working");
    
    if(like ===0){
        setLike(like+1)
    }
    else{
        setLike(like-1)
    }
        
    };
  return (
    <div className="" ref={heartRef}>
       <h1 className='font-black text-blue-400 uppercase'>click to show shre ram photo</h1>
         <div className="container border-2 w-72 h-96 flex justify-end items-center gap-1 relative shadow-xl shadow-cyan-500" >
            <div className="facebook absolute top-2 font-normal left-2 border-b-2 ">
                <h1>{like?'Jayshree-ram':'Hello Soumyaranjan'}</h1>
            </div>
            <div className="box text-md  mr-2 h-24 cursor-pointer flex w-10 flex-col items-center">
                <FontAwesomeIcon icon={faUserCircle} className=' user mb-3 ' width={20}/>
                <FontAwesomeIcon icon={faHeart} 
                className='heart-click  mb-2' onClick={clickfun} width={20}/>
                <p className=''>{like}view</p>
            </div>
             
             <div className="heart absolute top-32 left-24 ">
             <FontAwesomeIcon icon={faHeart} width={100} className='heart-show text-6xl'
             />
             </div>
         </div>
        
         
    </div>
  )
}

export default Animation
