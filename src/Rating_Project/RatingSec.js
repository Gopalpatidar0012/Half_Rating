import React, { useState } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as  FilledHeart,faStar as FilledStar,faHeartHalf as HeartHalf} from '@fortawesome/free-solid-svg-icons'
import { faHeart as EmptyHeart ,faStar as EmptyStar,faStarHalfStroke as HalfStar} from '@fortawesome/free-regular-svg-icons'

const SingleRating=({
    color,
    icon,
    onClick,
    size,
    status,
    index,
    disabled
    
})=>{

//   const[ratingValue,setRatingValue]=useState(0); 
//   const [toggles,setToggle]=useState(false);
//  console.log("Rating value",ratingValue);
let defaultFilled=FilledStar;
let defaultEmpty=EmptyStar;
let defaultFilledHalf=HalfStar;
// let defaultFilled1=HeartHalf;






//aage click hua ya piche deteck krna h vo 
// heart import karna h half
// 




switch (icon) {
    case 'heart': defaultFilled=FilledHeart
                defaultEmpty=EmptyHeart
               
        
        break;

    default:
        defaultFilled=FilledStar;
        defaultEmpty=EmptyStar;
        
        break;
}


  

    return(
        <>
            <FontAwesomeIcon  onClick={()=>{  

            if(!disabled){
              
            onClick(index)

            }
            } }

          

             
             
            icon={status ?  defaultFilledHalf:defaultEmpty} color={color} size={size}
            />

           
        </>

    ) 
}

const RatingSec=({
    defaultRating=3,
    maxReting=8,
    icon,
    onChangeRating,
    color,
    size="2x",
    disabled=false

})=>{
    const time=Array(5).fill(1);
    
    if(maxReting<defaultRating){
        return null
    }

   
    return(
        <>
         {
            time.map((_,index)=>
          
            <SingleRating maxRating={maxReting} 
            
            size={size}  
            status={index >= defaultRating ? false: true} 
            onClick={onChangeRating} 
            index={index}
             disabled={disabled}
             icon={icon}
             color={color}
             
            
             />
            )
        }
            
        </>
    )
}

export default RatingSec








// const SingleRating=({
//     color,
//     icon,
//     onClick,
//     size,
//     status,
//     index,
//     disabled
    
// })=>{

// //   const[hover,setHover]=useState(0); 
// //   console.log("mouse enter",mouseEvent)
// //   const [toggles,setToggle]=useState(false);
// //  console.log("Rating value",ratingValue);
// let defaultFilled=FilledStar;
// let defaultEmpty=EmptyStar;
// let defaultFilledHalf=HalfStar;

// switch (icon) {
//     case 'heart': defaultFilled=FilledHeart
//                 defaultEmpty=EmptyHeart
             
//         break;

//     default:
//         defaultFilled=FilledStar;
//         defaultEmpty=EmptyStar;
//         break;
// }

  

//     return(
//         <>
//             <FontAwesomeIcon  onClick={(e)=>{
              
//            if(!disabled){
//               onClick(index)

//               console.log("width",e.clientX.getBoundingClientRect())
//         //       const h=e.target.naturalHeight;
//         //    console.log("width of star",a)
              
//               console.log("pageX",e.pageX);
//             console.log("PageY",e.pageY);
//               }
           

//         } }

          
           
        
             
             
//             icon={status ? defaultFilledHalf:defaultEmpty} color={color} size={size}
//             />

           
//         </>

//     ) 
// }