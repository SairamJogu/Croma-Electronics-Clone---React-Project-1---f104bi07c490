import React from 'react'
import FilterLeft from './filterLeft/FilterLeft';
import FilterRight from './filterRight/FilterRight'

function FilterOptions() {
    return (
        <div className='flex justify-between mt-7'>
            <FilterLeft />
            <FilterRight />
        </div>
    )
}

export default FilterOptions