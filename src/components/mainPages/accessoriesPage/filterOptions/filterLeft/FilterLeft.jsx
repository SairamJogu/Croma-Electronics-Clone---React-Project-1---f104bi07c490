import React from 'react'
import Categories from './Categories';
import Price from './Price';
import Brand from './Brand';
import DeliveryMode from './DeliveryMode';
import Discount from './Discount';

function FilterLeft() {
    return (
        <div className='flex'>
            <Categories />
            <Price />
            <Brand />
            <DeliveryMode />
            <Discount />
        </div>
    )
}

export default FilterLeft