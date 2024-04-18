import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashCan, FaTrashCan, FaTrash } from "react-icons/fa6";
import formatePrice from '../../others/formatePrice/formatePrice';
import shopping_cart from '../../../asstes/images/shopping_cart.png';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaCartShopping, FaMinus, FaPlus } from "react-icons/fa6";
import './cart.css'
import { clearCart, removeFromCart, updateCArtQuen } from '../../slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  // const [amount, setAmount] = useState(product?.quantity);
  const cart = useSelector((state) => state.cart.carts);
  // const cartNumber = useSelector((state) => state.cart.cartNumber);
  const cartNumber = useSelector((state) => state.cart.cartNumber);
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);
  // console.log(cartNumber)
  // console.log(cartTotalPrice)

  // console.log(cart)
  const sum = cart.reduce((previousValue, currentValue, preIndex, arr) => {
    return previousValue + currentValue.totalPrice
  }, 0)
  // console.log(sum)



  if( cartNumber === 0) {
    return (
      <div className='xl:px-12 md:px-6 px-3 py-4 bg-gray-100 h-69'>
        <div className='flex flex-col justify-center items-center gap-4 px-5 py-12'>
          <img src={shopping_cart} alt="" className='w-32 pointer-events-none' />
          <span className='capitalize  text-sm font-semibold text-gray-600'>Your shopping cart is empty.</span>
          <Link to="/" className='capitalize bg-orange-600 text-white rounded-sm px-4 py-1.5 hover:scale-105 text-sm'>Go shopping Now</Link>
        </div>
      </div>
    )
  } 

  return (
    <div className='xl:px-12 md:px-6 px-3 py-4 bg-gray-100 overflow-auto'>
      <div className='min-w-96'>
        <div className='capitalize grid grid-cols-12 gap-2 justify-center items-center bg-white px-2 py-2 mb-4 text-base text-gray-700 font-semibold'>
          <div className='col-span-1 justify-center items-center'>
            <p className='text-center'>s.n</p>
          </div>
          <div className='grid gap-2 grid-cols-12 col-span-11 md:col-span-8 w-full justify-center items-center'>
            <p className='md:col-span-6 col-span-6 w-full pl-1 sm:pl-0'>product</p>
            <p className='md:col-span-3 col-span-3 text-center'>unit price</p>
            <p className='sm:col-span-3 col-span-3 text-center'>quantity</p>
          </div>
          <div className='md:grid gap-2 grid-cols-12 md:col-span-3 col-span-0 justify-center items-center hidden'>
            <p className='md:col-span-7 col-span-8 text-center'>total price</p>
            <p className='md:col-span-5 col-span-4 text-center'>remove</p>
          </div>
        </div>

        <div>
          {
            cart?.map((product, i) => {
              // const quen = product.quantity
              const handelChange = (e) => {
                const value = e.target.value
                console.log(value)
                dispatch(updateCArtQuen({quen: value, type: "INPU", id: product?.id}))
              }
              

              return (
                // <div  key={i} className='capitalize grid grid-cols-12 gap-2 px-2 justify-center items-center content-center even:bg-sky-100 odd:bg-pink-100 pt-3 pb-3 text-sm text-gray-700'>
                <div  key={i} className='capitalize even:bg-teal-100 odd:bg-yellow-100 text-sm sm:text-base text-gray-700 py-3 pt-2 md:pt-3 mb-2 px-2'>
                  <div className='grid grid-cols-12 gap-2 justify-center items-center capitalize'>
                    <div className='col-span-1 row-span-2 md:row-span-1 justify-center items-center'>
                      <p className='text-center text-lg md:text-base'>{i+1}</p>
                    </div>
                    <div className='grid gap-2 grid-cols-12 col-span-11 md:col-span-8 justify-center items-center pt-2 md:pt-0'>
                      <p className='md:col-span-6 col-span-6'>{product.title}</p>
                      <p className='md:col-span-3 col-span-3 text-center items-center'>{formatePrice(product.discountPrice)}</p>
                      <div className='quentity sm:col-span-3 col-span-3 text-center border border-gray-400 rounded-sm w-fit m-auto flex justify-center items-center'>
                        <button className='border-r border-gray-400 p-1 hover:bg-slate-200 hover:rounded-l' onClick={() => dispatch(updateCArtQuen({id: product?.id, type: "DEC"}))}><FaMinus className='text-sm' /></button>
                        {/* <input type="number" name='quantity' min='1' max={product?.stock} value={product?.quantity} onClick={(e) => change_v(product?.quantity)} className='w-8 px-1 bg-transparent focus:outline-none text-sm text-center' /> */}
                        {/* <input type="number" min='0' max={product?.stock} value={product?.quantity} onClick={handelChange} className='w-8 px-1 bg-transparent focus:outline-none text-sm text-center'/> */}
                        <input type="number" name="amount" value={product?.quantity} id="" min='1' max={product?.stock} onChange={handelChange} className='w-8 px-1 bg-transparent focus:outline-none text-sm text-center' />
                        {/* <p className='w-8 px-1 bg-transparent focus:outline-none text-sm text-center'>{product?.quantity}</p> */}
                        <button className='border-l border-gray-400 p-1 hover:bg-slate-200 hover:rounded-r' onClick={() => dispatch(updateCArtQuen({id: product?.id, type: "INC"}))}><FaPlus className='text-sm' /></button>
                      </div>
                    </div>
                    {/* <div className='bg-gray-700 h-px m-auto w-full opacity-40 md:hidden mb-2'></div> */}
                    <div className='grid gap-2 grid-cols-12 md:col-span-3 col-span-11 w-full text-center items-center border-t border-gray-400 md:border-none border-opacity-50 pt-3 md:pt-0'>
                    {/* <div className='grid gap-2 grid-cols-12 md:col-span-3 col-span-11 w-full border-2 border-teal-300 text-center'> */}
                      <div className='md:col-span-7 col-span-7 flex justify-center items-center'>
                        <p className='sm:text-base text-sm mr-1.5 md:hidden text-center font-semibold'>total price:</p>
                        <p className=''>{formatePrice(product.totalPrice)}</p>
                      </div>
                      <div className='md:col-span-5 col-span-5 flex justify-center items-center w-fit m-auto px-2 sm:px-3 py-1 sm:py-1.5 rounded-sm bg-red-100 cursor-pointer border border-orange-600 hover:bg-red-200' onClick={() => dispatch(removeFromCart(product.id))}>
                        <p className='sm:text-base text-sm mr-1 sm:mr-1.5 md:hidden text-center font-semibold text-red-600 tracking-tight'>remove</p>
                        <FaRegTrashCan className='text-red-600 text-lg' />
                      </div>
                    </div>
                  </div>
                </div>
                // <div key={i} className='capitalize grid grid-cols-12 gap-2 px-2 justify-center items-center content-center even:bg-sky-100 odd:bg-pink-100 pt-3 pb-3 text-sm text-gray-700'>
                //   <p className='w-full text-center col-span-1  hidden md:grid'>{i+1}</p>
                //   <p className='w-full text-start col-span-5'>{product.title}</p>
                //   <p className='w-full text-center md:col-span-2 col-span-3'>{formatePrice(product.discountPrice)}</p>
                //   <div className='quentity col-span-4 md:col-span-2 border w-fit m-auto border-gray-400 flex justify-center items-center rounded'>
                //       {/* <button className='border-r border-gray-400 p-1.5 hover:bg-slate-200 hover:rounded-l'><FaMinus className='text-sm' onClick={() => decreaseQua()} /></button> */}
                //       <button className='border-r border-gray-400 p-1 hover:bg-slate-200 hover:rounded-l'><FaMinus className='text-xs' /></button>
                //       {/* <p className='px-3'>{amount}</p> */}
                //       {/* <input type="number" name="amount" value={product.quantity} id="amount" min='1' max={product?.stock} onChange={handelchange} className='w-10 px-2 bg-transparent focus:outline-none' /> */}
                //       <input type="number" name="amount" value={product.quantity} id="" min='1' max={product?.stock} className='w-6 px-1 bg-transparent focus:outline-none text-xs' />
                //       {/* <div className='w-0.5 bg-orange-600 h-6'></div> */}
                //       {/* <button className='border-l border-gray-400 p-1.5 hover:bg-slate-200 hover:rounded-r'><FaPlus className='text-sm' onClick={() => increaseQua()} /></button> */}
                //       <button className='border-l border-gray-400 p-1 hover:bg-slate-200 hover:rounded-r'><FaPlus className='text-xs' /></button>
                //   </div>
                //   <div className='w-full text-center col-span-7 md:col-span-2 flex justify-center items-center mt-3 md:mt-0'>
                //     <p className='text-sm mr-1.5 md:hidden text-center'>total price:</p>
                //     <p className='text-center'>{formatePrice(product.totalPrice)}</p>
                //   </div>
                //   <FaRegTrashCan className='w-full md:col-span-1 col-span-5 mt-3 md:mt-0 text-center text-xl'  />
                // </div>
              )
            })
          }
        </div>

        <div className='bg-white flex justify-between flex-col md:flex-row gap-4 md:gap3 items-center px-3 py-4'>
          <div className='flex justify-center items-center gap-3 md:gap-4'>
            <button onClick={() => dispatch(clearCart())} className='capitalize flex items-center justify-center gap-1.5 border border-orange-600 bg-red-100 hover:bg-orange-600 md:px-3 px-2 py-1.5 rounded-sm group'>
              <p className='text-red-600 group-hover:text-white'>clear cart</p>
              <FaTrashCan className='text-red-600 group-hover:text-white text-base' />
              {/* <FaTrash /> */}
            </button>
            <Link to='/' className='tracking-tight text-sm bg-slate-100 border border-gray-800 px-2 py-1.5 rounded-sm '>Continue shopping</Link>
          </div>
          <div className='flex justify-center items-center flex-col gap-2 capitalize'>
            {/* <p className='font-semibold'>total ({cartNumber}) items: <span className='text-lg text-orange-600'>{formatePrice(cartTotalPrice)}</span></p> */}
            <p className='font-semibold'>total ({cartNumber}) items: <span className='text-lg text-orange-600'>{formatePrice(sum)}</span></p>
            <button className='rounded-sm bg-orange-600 px-3 md:px-4 py-1.5 text-white text-base capitalize'>check out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
