import React from 'react'

function Ads() {
    return (
        <div className='wrapper flex justify-center items-center '>
            <div className='flex w-1/4 justify-center items-center mt-10 '>
                <img src={require('../assets/images/Ads/Ad1.webp')} alt='Ad 1' className='mr-5'/>
                <img src={require('../assets/images/Ads/Ad2.webp')} alt='Ad 2' />
            </div>
        </div>
    )
}

export default Ads