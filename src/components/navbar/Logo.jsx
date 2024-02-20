import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    const imageUrl = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg';
  return (
    <Link to="/">
      <div className='cursor-pointer'>
          <img src={ imageUrl } alt='Logo' />
      </div>
    </Link>
  )
}

export default Logo