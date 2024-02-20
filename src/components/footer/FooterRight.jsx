import React from 'react'

function FooterRight() {
    return (
        <div className='text-white'>
            <h2 className='font-bold uppercase'>Products</h2>
            <div className='flex cursor-pointer font-bold'>
                <div className='mr-10'>
                    <ul>
                        <li className=' hover:text-teal-500 mb-4'>Television & Accessories</li>
                        <li className=' hover:text-teal-500 mb-4'>Home Appliances</li>
                        <li className=' hover:text-teal-500 mb-4'>Phones & Wearables</li>
                        <li className=' hover:text-teal-500 mb-4'>Computer & Tablets</li>
                        <li className=' hover:text-teal-500 mb-4'>Kitchen Appliances</li>
                        <li className=' hover:text-teal-500 mb-4'>Audio & Video</li>
                        <li className=' hover:text-teal-500 mb-4'>Health & Fitness</li>                                                                        
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className=' hover:text-teal-500 mb-4'>Grooming & Personal Care</li>
                        <li className=' hover:text-teal-500 mb-4'>Cameras & Accessories</li>
                        <li className=' hover:text-teal-500 mb-4'>Smart Devices</li>
                        <li className=' hover:text-teal-500 mb-4'>Gaming</li>
                        <li className=' hover:text-teal-500 mb-4'>Accessories</li>
                        <li className=' hover:text-teal-500 mb-4'>Top Brands</li>                                                                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterRight