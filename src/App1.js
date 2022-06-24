import React, { useState } from "react";
import Rating from "./Rating_Project/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const App1 = () => {
  const [rating, setRating] = useState(0);
//  console.log("this is useStae",rating)
// console.log(rating);
// let data=[];


// const calculate=(v)=>{

// setRating(v+1);
// console.log("this is index",v);

// if(v===rating-1){
//   console.log("change the icon state");
//   <Rating
//   defaultRating={rating}
//    color="blue"
//   />
   
// }

  // }

  // console.log("this is rating",rating);

  return (
    <div>
      <Rating
      defaultRating={rating}
       onChangeRating={(v)=>{setRating(v)
            //  console.log("this is index",v);
            //  if(v===rating-1){
            //      setRating(v)
            //      }
            // else{
            //   setRating(v);
            // }
        } }

      
      />
      
      <p>current Rating {rating}</p>
    </div>
  );
};

export default App1;
