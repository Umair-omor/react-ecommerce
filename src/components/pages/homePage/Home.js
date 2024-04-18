import React, { useState } from 'react'
import FirstSlide from '../../others/firstSlide/FirstSlide'
import ProductList from '../../others/productList/ProductList'
// import Loader1 from '../../others/loader/Loader1'
import { useSelector } from 'react-redux'
import { selectSortedProducts } from '../../slices/productSlice';


const Home = () => {


  const AllProducts = useSelector((state) => state.products.products.products);
  // const productsLoading = useSelector((state) => state.products.productsLoading);
  // const brand_Paylod = useSelector((state) => state.products.brands_paylod);
  const categoriesState = useSelector((state) => state.products.category_paylod);
  const brandsState = useSelector((state) => state.products.brands_paylod);
  const sorting_Value = useSelector((state) => state.products.sorting_Value);
  const search_Value = useSelector((state) => state.products.search_value);

  // const filteredProducts = useSelector(getFilteredProducts);
  // const filteredProducts = useSelector(getFilteredProducts);
  // const filteredProducts = useSelector(filterProductsByCategory);
  // console.log(AllProducts)
  // console.log(brandsState)
  // const filteredProducts = AllProducts?.filter((product) => product.category == categoriesState);
  // console.log(filteredProducts);
// ===========================================================
// sorting value get
  const prod = useSelector(selectSortedProducts);
  // console.log(prod)
// ===========================================================
// search Logic
  const serchValue = search_Value.toLowerCase();
  const serch_length = search_Value.length;
  console.log(serch_length)

  const filterBySearch = prod?.filter(pro => {
    const pro_name = pro.title.toLowerCase();
    const pro_dis = pro.description.toLowerCase();
    return pro_name.includes(serchValue) || pro_dis.includes(serchValue)
  });

  // console.log(filterBySearch)

// ===========================================================
// category logic
  const filteredCategory = filterBySearch?.filter((product) => {
    if(categoriesState.toLowerCase() === 'all') {
      return prod
    }
    if(product.category.toLowerCase() === categoriesState.toLowerCase()) {
      return product.category.toLowerCase() === categoriesState.toLowerCase()
    }
  });
// ======================================================
// brand logic
  const filteredBrand = filteredCategory?.filter((product) => {
    if(brandsState.toLowerCase() === 'all') {
      return AllProducts
    }
    if(product.brand.toLowerCase() === brandsState.toLowerCase()) {
      return product.brand.toLowerCase() === brandsState.toLowerCase()
    }
  });
  
  // ===================================================




  return (
    // <div  className='xl:px-12 md:px-6 px-3 py-4'>
    <div className='xl:px-14 md:px-7 px-3 py-4 bg-white'>
      <FirstSlide />
      {/* {productsLoading ? <Loader1 /> : <ProductList />} */}
      {/* <ProductList /> */}
      <div className={`flex justify-start items-center gap-2 md:gap-4 bg-white border border-gray-200 border-l-4 border-l-orange-600 shadow-gray-200 shadow-md md:px-4 px-3 py-2 mt-4 mb-2 ${brandsState ==='all' ? '' : 'hidden'} ${serch_length > 0 ? 'hidden' : 'flex'}`}>
        <h2 className='capitalize text-gray-500 text-sm md:text-base font-semibold'>{categoriesState} Products</h2>
        <h2 className='capitalize text-orange-600 text-xs font-semibold'>{filteredCategory?.length} available</h2>
      </div>
      <div className={`flex justify-start items-center gap-2 md:gap-4 bg-white border border-gray-200 border-l-4 border-l-orange-600 shadow-gray-200 shadow-md md:px-4 px-3 py-2 mt-4 mb-2 ${brandsState ==='all' ? 'hidden' : ''}`}>
        <h2 className='capitalize text-sm md:text-base text-slate-500 font-semibold'>{categoriesState !== 'all' ? categoriesState : ''} {categoriesState !== 'all' ? "|" : ''} {brandsState} Brands Products</h2>
        {/* <h2 className='capitalize text-sm md:text-base text-gray-600 font-semibold'>{brandsState} Brands Products</h2> */}
        <h2 className='capitalize text-orange-600 text-xs font-semibold'>{filteredBrand?.length} available</h2>
      </div>
      <div className={`flex justify-start items-center gap-2 md:gap-4 bg-white border border-gray-200 border-l-4 border-l-orange-600 shadow-gray-200 shadow-md md:px-4 px-3 py-2 mt-4 mb-2 ${serch_length > 0 ? 'flex' : 'hidden'}`}>
        <h2 className='capitalize text-sm md:text-base text-slate-500 font-semibold'>search result</h2>
        {/* <h2 className='capitalize text-sm md:text-base text-gray-600 font-semibold'>{brandsState} Brands Products</h2> */}
        <h2 className='capitalize text-orange-600 text-xs font-semibold'>{filteredBrand?.length} available</h2>
      </div>

      {/* <ProductList products={AllProducts} /> */}
      {/* <ProductList products={filteredCategory} /> */}
      <ProductList products={filteredBrand} />
    </div>
  )
}

export default Home
