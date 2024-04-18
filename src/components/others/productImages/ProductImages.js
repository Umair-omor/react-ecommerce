import React, { useState } from 'react'
import './ProductImages.css';

const ProductImages = ({imgs}) => {
  // const [firstImg, setFirstImg] = useState([0]);
  const [firstImg, setFirstImg] = useState(0);

  const handleClick = (i) => {
    // console.log(i)
    setFirstImg(Number(i))
  }

  return (
    <div className='flex items-center gap-4 justify-evenly flex-col w-auto md:w-1/2'>
      <div className='flex items-center justify-center order-1 w-auto'>
        {/* <img src={imgs && imgs[0]} alt="" className='w-auto object-cover' /> */}
        {/* <img src={imgs?.[0]} alt="" className='w-auto object-cover' /> */}
        <img src={imgs?.[firstImg]} alt="" className='big-img object-cover w-auto md:w-96 overflow-hidden mb-3' />
      </div>
      <div className='for-over relative flex items-center justify-center gap-2 md:gap-4 overflow-x-auto order-2 flex-row'>
        {imgs?.map((img, i) => {
            return (
                <div key={i} className='flex items-center justify-center overflow-x-auto'>
                    {/* <img src={img} alt="" className='object-cover w-20 h-14 transition ease-in-out delay-150 hover:scale-95 hover:border-2 border-green-400' /> */}
                    <img 
                      src={img} 
                      alt="" 
                      // className={i === firstImg ? "object-cover w-16 h-12 cursor-pointer active" : "object-cover w-16 h-12 cursor-pointer"}
                      className={`mini-images object-cover w-16 h-12 cursor-pointer rounded border border-gray-500 ${i === firstImg ? 'active' : ''}`}
                      onClick={() => handleClick(i)}
                    />
                    {/* <img src={img} alt="" className='object-cover w-20 h-14' /> */}
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ProductImages
