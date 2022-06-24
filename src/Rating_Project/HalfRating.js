import React, { useState } from 'react'
import RatingSec from "./RatingSec"


const HalfRating = () => {

  const[rating,setRating]=useState(0)
  return (
    <div> 
    <RatingSec defaultRating={rating}
       onChangeRating={(v)=>
           {
             console.log("i click this",v);
             if(v===rating-1){
               setRating(v);
             }
             else{
               setRating(v+1);
             }
           }}/>

           <p>This is current rating {rating}</p>
    </div>
    
  )
}

export default HalfRating

