import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaGg, FaPagelines, FaPaw , FaCartShopping, FaMagnifyingGlass,FaListUl, FaListOl, FaBarsProgress } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setLeftSideBarOn, setRightSideBarOn } from '../../slices/sidebarSlice';
import { setSearchValue, setcategory } from '../../slices/productSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
// console.log(searchTerm)

  // const categories = useSelector((state) => state.categories.category);
  // const loading = useSelector((state) => state.categories.loading);
  // const error = useSelector((state) => state.categories.error);
  const cartNumber = useSelector((state) => state.cart.cartNumber);

  const products = useSelector((state) => state.products.products.products);
  const categories = ['all', ...new Set(products?.map(product => product.category))];
  // console.log(products)
  // console.log(cartNumber)
  // console.log(categories)
  // console.log(loading)
  // console.log(error)
  // console.log(categories)

  const click1 = () => {
    // alert("Clicked button")
    dispatch(setLeftSideBarOn())
  }
  const click2 = () => {
    // alert("Clicked 2 button")
    dispatch(setRightSideBarOn())

  }
// ===================================
// 1 search logic
  // const searchValue = (e) => {
  //   // console.log(e.target.value);
  //   e.preventDefault();
  //   dispatch(setSearchValue(e.target.value));

  // }
// -------------------------------------
// 2 search logic

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    setSearchTerm(e.target.value);

  }
  const handleSearch = () => {
    // console.log(e.target.value);
    // preventDefault();
    dispatch(setSearchValue(searchTerm));

  }
  const clickCategory = (e) => {
    dispatch(setcategory(e));
    // dispatch(setLeftSideBarOff());
    // dispatch(filteredByCategory(e));

  }


  return (
    <div>
      <div className='flex justify-between items-center gap-2 md:gap-3 flex-wrap pb-3 w-full'>
        <FaBars className='md:text-2xl text-xl cursor-pointer mr-6 transition duration-500 hover:rotate-[360deg]' onClick={() => click1()} />
        <Link to='/' className='flex justify-between items-center order-1 md:order-1 w-auto'>
          <span className='text-2xl capitalize flex items-center justify-center hover:drop-shadow-lg hover:stroke-current transition duration-300 ease-in-out cursor-pointer'>
            {/* <FaGg  className='text-3xl mr-1' /> */}
            <FaPaw  className='text-xl mr-1' />
            {/* <FaPagelines    className='text-2xl mr-1' /> */}
            {/* <FaGgCircle   className='text-2xl mr-1 ' /> */}
            <span className='font-bold'>
              snap
            </span>
              up.
          </span>
        </Link>

        <Link to='/cart' className="order-2 md:order-3 w-auto relative">
          <FaCartShopping className='text-2xl cursor-pointer relative' />
          <p className='absolute -top-2 -right-2 sm:-top-3 sm:-right-3 text-orange-600 text-xs sm:text-sm px-1 py-0 rounded-full bg-white font-semibold border-solid border-2 border-orange-600'>{cartNumber}</p>
        </Link>

        {/* <form onSubmit={(e) => e.preventDefault()} className="order-3 md:order-2 w-10/12 md:w-7/12 relative">
          <input onChange={(e) => searchValue(e)} className='w-full py-1.5 md:py-2 px-4 text-sm rounded-sm text-black focus:outline-none' type="text" placeholder="Search Product" />
          <FaMagnifyingGlass className='absolute sm:text-2xl text-xl right-0 top-0 bottom-0 w-12 md:w-14 p-1 font-bold bg-orange-600 h-full border-4 border-white border-solid rounded-r-sm' />
        </form> */}
        <div className="order-3 md:order-2 w-10/12 md:w-7/12 relative">
          <input onChange={handleInputChange} className='w-full py-1.5 md:py-2 px-4 text-sm rounded-sm text-black focus:outline-none' type="text" placeholder="Search Product" />
          <button onClick={handleSearch} className='absolute right-0 top-0 bottom-0 w-12 md:w-14 p-1 font-bold bg-orange-600 h-full border-4 border-white border-solid rounded-r-sm'><FaMagnifyingGlass className='m-auto md:text-lg text-base' /></button>
        </div>
        
        <div className="order-4 md:order-4 w-auto">
          {/* <FaBarsProgress className='text-2xl cursor-pointer' onClick={() => click2()} /> */}
          <FaListUl className='text-2xl cursor-pointer' onClick={() => click2()} />
          {/* <FaListOl  className='text-2xl cursor-pointer' onClick={() => click2()} /> */}
        </div>

      </div>

      <div className='justify-start items-center gap-4 mb-2 hidden md:flex'>
        {
          categories?.slice(0, 9).map((category, idx) => (
            <li className='list-none inline-block' key = {idx}>
              {/* <Link to = {`category/${category}`} className='capitalize text-xs inline-block'>{category.replace("-", " ")}</Link> */}
              <button className='capitalize text-xs inline-block' onClick={() => clickCategory(category)}>{category.replace("-", " ")}</button>
            </li>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar
