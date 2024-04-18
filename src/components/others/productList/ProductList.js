import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setAnother_sing } from '../../slices/productSlice';
import { Link } from 'react-router-dom';
import formatePrice from '../formatePrice/formatePrice';
import Loader1 from '../loader/Loader1';
import './productList.css'

const ProductList = ({products}) => {
    // console.log(products)
    const dispatch = useDispatch();
    // const state = useSelector((state) => state.products.brands);
    // console.log(state)
    // const AllProducts = useSelector((state) => state.products.products.products);
    // const pro = useSelector((state) => state.products.products);
//   const loading = useSelector((state) => state.categories.loading);
//   const error = useSelector((state) => state.categories.error);

    const productsLoading = useSelector((state) => state.products.productsLoading); 
    // const brands = useSelector((state) => state.products.brands); 
    // console.log(brands)    
    // console.log(productsLoading)    

// console.log(state)
// console.log(AllProducts)
// console.log(pro)



const search_Value = useSelector((state) => state.products.search_value);
const serchValue = search_Value;
// const serchValue = search_Value.toLowerCase();


 useEffect(() => {
    dispatch(fetchProducts(100))
 }, [])

 if(productsLoading) {
    return (
        <Loader1 />
    )
 };
 if(products?.length === 0) {
    return (
        <div className='flex justify-center items-center w-full h-4/5 mx-3 my-10'>
            <h2 className='capitalize text-orange-600 text-base md:text-2xl font-semibold text-center'>products are not available right now</h2> 
        </div>
    )
 }

  return (
    <div className='customCss grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 mt-10'>
        {/* {AllProducts?.map((product, i) => { */}
        {products?.map((product, i) => {
            let discountPrice = (product.price) - (product.price * (product.discountPercentage / 100));
            return (
                // <Link to={`/product/${product?.id}`} key={product.id} state={product && product} className='hover:drop-shadow-md border border-gray-200 rounded-md relative bg-white'>
                <Link to={`/product/${product?.id}`} key={product.id} state={product && product} className='hover:drop-shadow-md border border-gray-200 rounded-md relative bg-white'>
                    <img src={product?.images[0]} alt={product?.title} className='h-48 overflow-hidden object-cover rounded-md m-auto' />
                    <div className='text-sm capitalize px-2 py-2'>
                        <p className='extraCss absolute -left-1.5 top-3 bg-orange-600 text-white text-xs capitalize px-3 py-1 tracking-wider rounded-sm font-medium'>{product?.category.replace("-", " ")}</p>
                        <p className='font-medium text-base pb-1.5'>{product?.title}</p>
                        {/* <p className='font-medium text-gray-600 pb-1'>Brand: {product?.brand}</p> */}
                        <p className='text-sm text-gray-500 pb-1'>{product?.description.slice(0,28)}.....<span className='text-sm text-orange-600 lowercase'>read more</span></p>
                        <p className='text-base font-medium pb-1'>{formatePrice(discountPrice)}</p>
                        <div className='flex gap-2 items-center pb-1'>
                            <p className='line-through text-gray-400 font-medium'>{formatePrice(product?.price)}</p>
                            <p className='font-medium text-xs'>-{formatePrice(product?.discountPercentage)}%</p> 
                        </div>
                        {/* <p>discount: {product?.discountPercentage}%</p>  */}
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default ProductList
