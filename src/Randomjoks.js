import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Randomjoks.css'

function Randomjoks() {
    const [data,setdata] =useState([])
   
    function show(){
        
            axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
            .then((Resolve)=>{
              console.log(Resolve.data.joke)
              setdata(Resolve.data.joke)
            })
        
    }
   
   
   
  return (
    <div>
        <div className='container'> 
            <div className='main'>
            <div className='box'>
              <h1>{data}</h1>
              
            </div>
            <div className='btn'>
               <button type="" onClick={show}>show data</button>
               </div>
            </div>
         </div>
    </div>
  )
}

export default Randomjoks
