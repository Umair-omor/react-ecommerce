// import React, { useState } from 'react'
import { getLeftSidebar, setLeftSideBarOff } from '../../slices/sidebarSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaXmark } from "react-icons/fa6";
import { setcategory } from '../../slices/productSlice';
import { NavLink } from 'react-router-dom';

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const leftSideOn = useSelector(getLeftSidebar);  
  const products = useSelector((state) => state.products.products.products);

  

  const categoriesState = useSelector((state) => state.products.category_paylod);

  const brands = ['All', ...new Set(products?.map(product => product.brand))];
  const categories = ['all', ...new Set(products?.map(product => product.category))];

  // console.log(categoriesState.toLowerCase(), categoriesState.toUpperCase())

  const close = () => {
    dispatch(setLeftSideBarOff())
  }
  const clickCategory = (e) => {
    dispatch(setcategory(e));
    dispatch(setLeftSideBarOff());
    // dispatch(filteredByCategory(e));

  }


// var obj = {
//     content: text,
//     length: text.length,
//     uppercase: text.toUpperCase(),
//     lowercase: text.toLowerCase(),
//     reversed: text.split('').reverse().join('')
// };


  return (
    <div>
      <div onClick={() => dispatch(setLeftSideBarOff())} className={`${leftSideOn ? 'fixed top-0 left-0 h-screen w-screen bg-slate-950 opacity-70 z-10' : 'hidden'}`}></div>
      <div className={`${leftSideOn ? 'transition ease-in-out fixed top-0 left-0 bg-white h-full w-64 translate-x-0 z-10' : '-translate-x-80 fixed'}`}>
        <h2 className='capitalize text-xl font-medium mb-3 mt-4 px-4 text-gray-700'>all categories</h2>
        <FaXmark onClick={() => close()} className='absolute top-5 right-3 text-xl cursor-pointer text-gray-800 hover:scale-110 ease-in duration-200 hover:text-red-500 hover:rotate-180' />
        <ul className='flex flex-col gap-4 overflow-y-scroll h-screen px-4 pt-2 pb-40 bg-gradient-to-b from-gray-50 from-10% via-white via-80% to-gray-50 to-10%'>
          {categories?.map((category, index) => {
            return(
              <li key={index} onClick={() => clickCategory(category)} className={`group hover:bg-orange-100 cursor-pointer list-none inline-block ${categoriesState === category ? 'bg-gray-300 hover:bg-gray-300 rounded-sm' : ''}`}>
                {/* <button onClick={() => clickCategory(category)} className='capitalize active:text-orange-600 text-gray-600 inline-block text-sm hover:translate-x-1 ease-in-out duration-200 pl-1 pr-5'>{category.replace("-", " ")}</button>             */}
                <button className={`capitalize group-hover:translate-x-1 ease-in-out duration-200 active:text-orange-600 text-gray-600 inline-block text-sm pl-1 pr-5 ${categoriesState === category ? 'text-orange-500' : ''}`}>{category.replace("-", " ")}</button>                       
              </li>
            )
          })}
        </ul>
    </div>
    </div>
  )
}

export default LeftSideBar