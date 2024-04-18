import React from 'react';
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const RatingStar = ({star}) => {
    console.log(star)
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {star >= index + 1 ? (<FaStar className='text-amber-500' />)
                : star >= number ? (<FaStarHalfStroke className='text-amber-500' />)
                : (<FaRegStar className='text-amber-500' />)}
            </span>
        )
    })
    return (
        <div className='flex justify-start items-center gap-0.5 mb-2'>{ratingStar}</div>
    )
}

export default RatingStar
