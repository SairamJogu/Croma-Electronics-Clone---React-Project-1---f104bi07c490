import React from 'react';
import { CiSearch} from 'react-icons/ci'

function SearchBar() {
    return (
        <div className='flex items-center bg-white h-9 w-full max-w-md px-2 rounded-md'>
            <input type="text" placeholder="What are you looking for ?" className='w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black' />
            <CiSearch className='text-black text-2xl' />
        </div>
    )
}

export default SearchBar