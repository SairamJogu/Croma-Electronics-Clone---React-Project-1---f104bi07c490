import React from 'react';
import dealsData from '../Deals2.json';

const BestSellDeals = () => {
    return (
        <div className='wrapper'>
            <h2 className='mt-20 mb-5 font-bold text-2xl text-yellow-50'>Best Selling Deals</h2>
            <div className='mb-5 grid grid-cols-4 gap-4'>
                {dealsData.map((deals) => (
                    <div key={deals.id} className='w-full'>
                        <img src={deals.img} alt={deals.name} className='w-full h-full rounded-lg' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellDeals;
