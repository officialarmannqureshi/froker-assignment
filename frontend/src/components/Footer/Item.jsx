import React from 'react'

const Item = (props) => {
  return (
    <div style={{fontSize:props.fontSize,color:props.fontColor,fontFamily:props.fontFamily}} className='row'>
        <span>
            <img className="arr" src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="" srcset="" />
        
        </span>
        {props.children}
    </div>
  )
}

export default Item