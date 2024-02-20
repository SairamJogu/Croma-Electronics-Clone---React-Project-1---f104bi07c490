import React from 'react'

function FooterMiddle() {
    return (
        <div className='text-white'>
            <h2 className='font-bold uppercase'>Useful Links</h2>
            <div className='flex cursor-pointer font-bold'>
                <div className='mr-10'>
                    <ul>
                        <li className=' hover:text-teal-500 mb-4'>About Croma</li>
                        <li className=' hover:text-teal-500 mb-4'>Help and Support</li>
                        <li className=' hover:text-teal-500 mb-4'>FAQs</li>
                        <li className=' hover:text-teal-500 mb-4'>Buying Guide</li>
                        <li className=' hover:text-teal-500 mb-4'>Return Policy</li>
                        <li className=' hover:text-teal-500 mb-4'>B2B Orders</li>
                        <li className=' hover:text-teal-500 mb-4'>Store Locator</li>
                        <li className=' hover:text-teal-500'>E-Waste</li>                                          
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className=' hover:text-teal-500 mb-4'>Franchise Opputunity</li>
                        <li className=' hover:text-teal-500 mb-4'>Site Map</li>
                        <li className=' hover:text-teal-500 mb-4'>Carrers at Croma</li>
                        <li className=' hover:text-teal-500 mb-4'>Terms of Use</li>
                        <li className=' hover:text-teal-500 mb-4'>Disclaimer</li>
                        <li className=' hover:text-teal-500 mb-4'>Privacy Policy</li>
                        <li className=' hover:text-teal-500 mb-4'>Unboxed</li>
                        <li className=' hover:text-teal-500'>Gift Card</li>                                          
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterMiddle