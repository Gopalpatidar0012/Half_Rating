import React, { useState } from 'react'
import Like from './Like'

const LikeApp = () => {
  const [likeMe, setLikeMe] = useState(false)
  const [count, setCount] = useState(0)

  console.log('first time', likeMe)
  return (
    <div>
      <Like
        defaultRating={likeMe}
        onChangeRating={() => {
          if (!likeMe) {
            setLikeMe(!likeMe)
            setCount(count + 1)
          } else {
            setLikeMe(false)
            setCount(count - 1)
          }
        }}
      />

      <p> like : {count} </p>
    </div>
  )
}

export default LikeApp
