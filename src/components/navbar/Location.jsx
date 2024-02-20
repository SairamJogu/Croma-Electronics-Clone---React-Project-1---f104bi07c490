import React from 'react';
import { IoLocationSharp, IoPencilSharp  } from "react-icons/io5";

function Location() {
    return (
        <div className='flex items-center'>
            <IoLocationSharp className='mr-1' />
            <small>Mumbai, 400049</small>
            <IoPencilSharp />
        </div>
    )
}

export default Location