import React from 'react'
import Navbar from '../../navbar/Navbar';
import { Helmet } from 'react-helmet';
import FilterOptions from './filterOptions/FilterOptions';
import AccessoriesPage from './accessories/AccessoriesPage';

function Accessories() {
  return (
    <div>
        <Helmet>
            <title>Accessories | Croma</title>
        </Helmet>
        <Navbar />
        <div className='wrapper text-white'>
            <div className='mt-10'>
                <h3 className='font-bold'>Accessories</h3>
                <h2 className='font-bold text-2xl'>Accessories(2024)</h2>
            </div>
            <FilterOptions  />
            <AccessoriesPage />
        </div>
    </div>
  )
}

export default Accessories