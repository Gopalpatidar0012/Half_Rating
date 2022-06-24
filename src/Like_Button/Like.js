import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FilledHeart } from "@fortawesome/free-solid-svg-icons";

const Like = ({color="red",icon=FilledHeart,size="4x",onChangeRating,defaultRating}) => {
 

  return (
    <div>
      
      <FontAwesomeIcon
        icon={icon}
        onClick={() =>onChangeRating()}
        color={defaultRating ? color :"gray"}
        size={size}
      />
    </div>
  );
};

export default Like;
