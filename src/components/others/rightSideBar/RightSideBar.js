import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRightSideBarOff } from '../../slices/sidebarSlice';
import { FaXmark, FaAlignCenter, FaGrip  } from "react-icons/fa6";
import { selectSortedProducts, setBrand, setReset_All, setSelectValue } from '../../slices/productSlice';

const RightSideBar = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products.products);
    const brandsPayload = useSelector((state) => state.products.brands_paylod);
    const sorting_Value = useSelector((state) => state.products.sorting_Value);
    // console.log(sorting_Value)

    const brands = ['All', ...new Set(products?.map(product => product.brand))];
    const categories = ['All', ...new Set(products?.map(product => product.category))];
    // console.log(products)
    // console.log(brands)
    // console.log(categories)
    // console.log(category)

    // console.log(produ)
    // const brands = useSelector((state) => state.products.products.brands);
    // const categories = useSelector((state) => state.categories.category);
    const isRightSideBarOn = useSelector((state) => state.sidebar.isRightSideBarOn);
    // console.log(isRightSideBarOn)
    const barr = products?.map(item => item.brand)
    const bbb = ['all', ...new Set(barr)]
    // console.log(barr) 
    // console.log(bbb)


    const close = () => {
        dispatch(setRightSideBarOff());
    }
    const brandClick = (e) => {
      dispatch(setRightSideBarOff());
      dispatch(setBrand(e));
    }
    const selectPrice = (e) => {
      // console.log(e)
      dispatch(setSelectValue(e.toLowerCase()))
      dispatch(setRightSideBarOff());
    }
    const resetClick = () => {
      dispatch(setReset_All());
      dispatch(setRightSideBarOff());
    }
    const data = ['b', 'c', 'a', 'd', 'g', 'a', 'c', 'e', 'f', 'b', 'g', 'e', 'a', 'a','e','g', 'f', 'a', 'd']
    const dat = [4,2,5,6 ,2,6,2,8,6,8,6,4,2,1,2,3,1,5,6]
    const dd = ['all', ...new Set(dat)]

  return (
    <div>
      <div onClick={() => dispatch(setRightSideBarOff())} className={`${isRightSideBarOn ? 'fixed top-0 left-0 h-screen w-screen bg-slate-950 opacity-70 z-10' : 'hidden'}`}></div>
      <div className={`${isRightSideBarOn ? 'transition ease-in-out fixed top-0 right-0 bg-white h-full w-64 translate-y-0 z-10 inline' : 'translate-y-80 hidden fixed'}`}>
        <FaXmark onClick={() => close()} className='absolute top-5 left-3 text-xl cursor-pointer text-gray-800 hover:scale-110 ease-in duration-200 hover:text-red-500 hover:rotate-180' />
        <div className='flex justify-center flex-col gap-4 mt-6'>
            <div className='flex justify-center items-center gap-3 pt-3 pb-4 border-opacity-25 border-b border-gray-600'>
                <button className='bg border border-orange-600 rounded p-1'><FaGrip className='text-xl sm:text-2xl' /></button>
                <button className='bg border border-orange-600 rounded p-1'><FaAlignCenter className='text-xl sm:text-2xl' /></button>
            </div>
            <select name="" id="" value={sorting_Value} onChange={(e) => selectPrice(e.target.value)} className='w-auto capitalize mx-auto border border-gray-600 focus:border focus:border-gray-600 rounded text-sm px-2 py-1'>
                <option value="default">Default</option>
                <option value="lowtohigh">price low To High</option>
                <option value="hightolow">price high to Low</option>
                <option value="atoz">a-z</option>
                <option value="ztoa">z-a</option>
            </select>
            <div className='border-y border-opacity-25 border-gray-800 px-2 py-5 text-center'>
              <p className='text-gray-600 text-xs capitalize mb-3'>back to the previous state </p>
              <button onClick={resetClick} className='capitalize border border-red-600 bg-red-100 px-3 py-1 text-red-600 text-base font-semibold hover:bg-orange-600 hover:text-white hover:border-red hover:rounded-sm'>Reset All</button>
            </div>
            <h2 className='capitalize text-xl font-medium px-4 text-gray-700 text-center'>all brands</h2>
            <div className='flex justify-center flex-col items-center gap-4 overflow-auto'>
                <ul className='flex flex-col gap-4 overflow-y-scroll h-lvh px-2 py-3 overflow-auto pb-64 bg-gradient-to-b from-gray-50 from-10% via-white via-80% to-gray-50 to-10%'>
                  {bbb?.map((item, index) => {
                      return (
                        <li key={index} onClick={() => brandClick(item)} className={`group hover:bg-orange-100 cursor-pointer list-none inline-block px-2 mx-1 ${brandsPayload === item ? 'bg-gray-300 hover:bg-gray-300 rounded-sm' : ''}`}>
                          <p className={`capitalize group-hover:translate-x-1 ease-in-out duration-200 active:text-orange-600 text-gray-700 inline-block text-sm ${brandsPayload === item ? 'text-orange-600 font-semibold' : ''}`}>{item?.replace("_", " ")}</p>
                        </li>
                      )
                    })
                  }
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar








