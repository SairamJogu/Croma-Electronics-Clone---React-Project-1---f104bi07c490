import React from 'react'
import FooterLeft from './FooterLeft';
import FooterMiddle from './FooterMiddle';
import FooterRight from './FooterRight';

function Footer() {
    return (
        <div className=' bg-black py-3'>
            <div className='flex justify-between wrapper'>
                <FooterLeft />
                <FooterMiddle />
                <FooterRight />
            </div>
        </div>
    )
}

export default Footer