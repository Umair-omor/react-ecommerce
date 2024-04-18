import React from 'react'
// import loader1 from '../../../asstes/images/350.gif'
import loader1 from '../../../asstes/images/350.gif'

const Loader1 = () => {
  return (
    <div className='w-full h-full min-h-48 flex justify-center items-center'>
        <img className='w-10 md:w-11 lg:w-12' src={loader1} alt="Loading..." />
    </div>
  )
}

export default Loader1
