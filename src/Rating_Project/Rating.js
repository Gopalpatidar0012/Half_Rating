import React, { useState } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as  FilledHeart,faStar as FilledStar} from '@fortawesome/free-solid-svg-icons'
import { faHeart as EmptyHeart ,faStar as EmptyStar,faStarHalfStroke as HalfStar} from '@fortawesome/free-regular-svg-icons'

const SingleRating=({
    color,
    icon,
    onClick,
    size,
    status,
    index,
    disabled,
    defaultRating,
    
})=>{

//   const[hover,setHover]=useState(0); 
//   console.log("mouse enter",mouseEvent)
//   const [toggles,setToggle]=useState(false);
//  console.log("Rating value",ratingValue);
let defaultFilled=FilledStar;
let defaultEmpty=EmptyStar;
let defaultFilledHalf=HalfStar;
let currentStar=index+1;
let icons=EmptyStar;

if(defaultRating===currentStar){
   icons=FilledStar;
}
else if(defaultRating < currentStar && defaultRating > currentStar-1){
     icons=HalfStar;
}
else if(defaultRating > currentStar ){
     icons = FilledStar;
}
else{
    icons=EmptyStar;
}



const onChangeHandler=(e)=>{

const width= e.currentTarget.clientWidth;
const left = e.currentTarget.getBoundingClientRect().x;  //edge by left distance
const a=e.clientX/width-index;
console.log('left is', left, (e.clientX - left) > width/2, index);
const shouldBeFull = (e.clientX - left) > width/2;
const extraRating = shouldBeFull ? 1 : 0.5;
console.log('rating must be', extraRating + index)

onClick(extraRating+index);
}
    return(
        <>
            <FontAwesomeIcon  onClick={(e)=>{onChangeHandler(e)}} icon={icons} color={color} size={size}/>  
        </>

    ) 
}

const Rating=({
    defaultRating=0,
    maxReting=8,
    icon,
    onChangeRating,
    color,
    size="2x",
    disabled=false

})=>{
    const time=Array(5).fill(1);
    // console.log("this is",time);
    if(maxReting<defaultRating){
        return null
    }

   
    return(
        <>
        
         {
            time.map((_,index)=>
          
            <SingleRating 
            key={index}
            maxRating={maxReting} 
            
            size={size}  
            status={index >= defaultRating ? false: true} 
            onClick={onChangeRating} 
            index={index}
             disabled={disabled}
             icon={icon}
             color={color}
             defaultRating={defaultRating}
             
            
             />
            )
        }
            
        </>
    )
}

export default Rating