import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="inner-popup">
            <button onClick={()=>props.setTrigger(false)} className="close-btn"><AiOutlineClose/></button>
            {props.children}
        </div>
    </div>
  ) : '';
}

export default Popup
