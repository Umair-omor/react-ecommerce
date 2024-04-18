import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaCartPlus, FaCartShopping, FaMinus, FaPlus } from "react-icons/fa6";
import ProductImages from '../../others/productImages/ProductImages';
import formatePrice from '../../others/formatePrice/formatePrice';
import './singleProduct.css'
import { addtoCart } from '../../slices/cartSlice';
import Loader1 from '../../others/loader/Loader1';
import RatingStar from '../../others/ratingStar/RatingStar';

const SingleProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state) => state.products.si_pro_Loading);
  const [amount, setAmount] = useState(1);
  
  
  const location = useLocation()
  const [products, setProducts] = useState(location.state);


  // console.log(location.state)
  // console.log(products)


  // ==========================================
  // part - 1
  // ----------------
  let discountPrice = (location.state?.price) - (location.state?.price * (location.state?.discountPercentage / 100));
  // console.log(singlProduct)
  // console.log(discountPrice)
  // ==========================================

  // ==========================================
  // part - 2
  // ----------------
  // console.log(location.state.id);
  // console.log(location.state);
  // ==========================================


  // ==========================================
  // part - 3
  // ----------------
  // const allProducts = useSelector((state) => state.products.products.products);
  // console.log(allProducts)

  // // const singlProduct = allProducts.filter(product => product.id === id);
  // // const singlProduct = allProducts && allProducts.filter(post => String(post.id) === id);
  // const singlProduct = allProducts && allProducts.filter(post => post.id === Number(id));
  // console.log(singlProduct)
  // console.log(singlProduct[0].id)
  // ==========================================

  const handelchange = (e) => {
    // setAmount(e.target.value)
    const value = e.target.value
    setAmount(value)
    // if(value < 1 || value > singlProduct?.stock) {
    // }
    if(value < 1 ) {
      setAmount(1)
    }
    if(value > location.state?.stock) {
      setAmount(location.state?.stock)
    }
  }

  const decreaseQua = () => {
    // console.log('click--')
    // setAmount(singlProduct?.stock)
    // setAmount(amount - 1)
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  const increaseQua = () => {
    // console.log('click++')
    amount < location.state?.stock ? setAmount(amount + 1) : setAmount(location.state?.stock)
    // setAmount(amount + 1)
  }
  const addToCart = (products) => {
    // console.log(' add to cart')
    let totalPrice = amount * discountPrice;
    // console.log({products, quantity: amount, discountPrice, totalPrice})
    // console.log(product)
    // dispatch(addToCart({...product}))
    // dispatch()
    // dispatch(addtoCart({...products, quantity: amount, discountPrice, totalPrice}))
    dispatch(addtoCart({...products, quantity:amount, totalPrice, discountPrice }))
    // dispatch(addtoCart(products))
    // navigate('/cart', {replace: true})
    navigate('/cart')
  }
  
  if(loading) {
    return (
      <Loader1 />
    )
  }

  
  return (
    <div  className='xl:px-14 md:px-7 px-3 my-5 border rounded-md shadow-gray-200 shadow-md bg-gray-100 p-3'>
      <div className='flex justify-between md:items-center flex-col md:flex-row gap-4 w-full'>
        <ProductImages imgs={location.state?.images} />
        <div className='w-auto md:w-1/2 py-3 md:py-0'>
          <h2 className='text-xl font-medium pb-4 capitalize text-black'>{location.state?.title}</h2>
          <p className='text-sm text-gray-500 pb-3'>{location.state?.description}</p>
          <RatingStar star={location.state?.rating} />
          <div className='flex justify-start items-center gap-2 md:gap-4 text-sm capitalize pb-2'>
            <p><span className='text-orange-600'>rating:</span> {location.state?.rating}</p>
            <div className='w-0.5 bg-orange-600 h-4'></div>
            <p><span className='text-orange-600'>brand:</span> {location.state?.brand}</p>
            <div className='w-0.5 bg-orange-600 h-4'></div>
            <p><span className='text-orange-600'>category:</span> {location.state?.category}</p>
          </div>
          <p className='capitalize text-sm text-gray-800 mb-5'>available: {location.state?.stock}</p>
          <div className='flex items-center gap-3 pb-1'>
            <p className='line-through text-gray-400 font-medium'>{formatePrice(location.state?.price)}</p>
            <p className='text-sm'>Inclusive of all taxes</p>
          </div>
          <div className='flex items-center justify-start gap-2 pb-6'>
            <h3 className='text-black text-xl font-semibold'>{formatePrice(discountPrice)}</h3>
            <h5 className='bg-orange-600 text-white px-1.5 py-0.5 text-xs font-medium rounded '>{location.state?.discountPercentage} %OFF</h5>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='flex justify-start items-center gap-2 mb-8'>
            <label className='capitalize'>quantity:</label>
            {/* <label className='capitalize'>quantity:</label> */}
            <div className='quentity flex justify-start items-center border border-gray-400 rounded'>
              <button className='border-r border-gray-400 p-1.5 hover:bg-slate-200 hover:rounded-l'><FaMinus className='text-sm' onClick={() => decreaseQua()} /></button>
              {/* <p className='px-3'>{amount}</p> */}
              <input type="number" name="amount" value={amount} id="" min='1' max={location.state?.stock} onChange={handelchange} className='w-10 px-2 bg-transparent focus:outline-none' />
              {/* <div className='w-0.5 bg-orange-600 h-6'></div> */}
              <button className='border-l border-gray-400 p-1.5 hover:bg-slate-200 hover:rounded-r'><FaPlus className='text-sm' onClick={() => increaseQua()} /></button>
            </div>
            {/* <form onChange={(e) => e.preventDefault()}>
              <input type="number" name='amount' min='1' max={singlProduct?.stock} value={amount} placeholder='number' onChange={handelchange} />
            </form> */}
          </form>

            {/* <button className='flex relative justify-between items-center gap-2 text-base capitalize border border-orange-600 px-4 py-1.5 bg-orange-100 text-orange-600' onClick={() => addtoCart(singlProduct)}> */}
          <button className='flex relative justify-between items-center gap-2 text-base capitalize border border-orange-600 px-4 py-1.5 bg-orange-100 text-orange-600' onClick={() => addToCart(location.state)}>
               
            <span className='order-2 transition-transform hover:translate-x-1'>add to cart</span>
            {/* <FaCartShopping className='text-xl order-1'  /> */}
            <FaCartPlus className='text-xl order-1' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
