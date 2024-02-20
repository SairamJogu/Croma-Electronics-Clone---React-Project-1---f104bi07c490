import React, { useContext } from 'react';
import accessories from '../../../../data/accessories/Accessories.json';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { AiFillStar } from 'react-icons/ai';
import { Cart } from '../../../context/Context';

function AccessoriesPage() {
    const {addToCart} = useContext(Cart)
    const addCart = (item) => {
        addToCart(item)
    }
    return (
        <div className='wrapper mt-10 grid grid-cols-3 gap-4'style={{ marginTop: '60px' }}>
            {accessories.map((items) => (
                <div key={items.id}>
                    <div className='bg-zinc-700 rounded-lg w-10/12 h-3/5'>
                        <img src={items.img} alt={items.name} className='p-14' />
                    </div>
                    <div>
                        <h2 className='title mt-5 font-bold'>{items.title}</h2>
                    </div>
                    <div className='flex mr-1 mb-2'>
                        <div className='text-teal-500 flex items-center mr-1'>
                            <p className='mr-1'>{items.rating}</p>
                            <p><AiFillStar /></p>
                        </div>
                        <p>{items.review}</p>
                    </div>
                    <div className='flex items-center mb-3'>
                        <h3 className='font-bold text-2xl mr-3'>{items.newPrice}</h3>
                        <del className='mr-2 text-sm'>{items.prevPrice}</del>
                        <small className='mr-2 text-gray-400'>{items.saving}</small>
                        <button className='border border-gray-700 rounded-sm text-xs px-1 font-semibold'>{items.discount}</button>
                    </div>
                    <div className='flex items-center'>
                        <FaScrewdriverWrench />
                        <p className='ml-2 text-sm'>{items.delivery}</p>
                    </div>
                    <div className='mt-3'>
                        <button onClick={() => {addCart(items)}} className='bg-teal-500 text-black rounded-lg py-1 px-3 hover:text-white'>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AccessoriesPage