import Navbar from '../navbar/Navbar'
import React, { useContext, useEffect } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import { Cart } from '../context/Context';

function CartPage() {
  useEffect(() => {
    document.body.classList.add('white-bg');
    return () => {
      document.body.classList.remove('white-bg');
    };
  }, []);

  const {products} = useContext(Cart)
    return (
        <div>
            <Navbar />
            <div className='wrapper'>
              <h2 className='font-bold uppercase mt-10'>Your Cart</h2>
              {products.length === 0 ? <div className='flex justify-center items-center mb-20'>
                  <div>
                      <IoCartOutline className='text-9xl'/>
                      <p className='font-bold my-4'>Your Cart is Empty</p>
                      <Link to='/accessories' className='text-teal-500 underline'>continue shopping</Link>
                  </div>
              </div>:
              <div>
                {products.map((item,index)=>
                <h1>Added to Cart</h1>
                )}
              </div>
              }
            </div>
            <Footer />
        </div>
    )
  }

export default CartPage