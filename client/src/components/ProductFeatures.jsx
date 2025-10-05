import React from 'react'
import { assets } from '../assets/data'

const ProductFeatures = () => {
  return (
    <div className='mt-12 bg-primary rounded-2xl'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap12 roundxl">
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div>
            <img src={assets.returnRequest} width={77} className='mb-3' alt="" />
          </div>
          <div>
            <h4 className='capitalize'>Easy Return</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ducimus culpa nostrum nihil quidem dolorem ipsam commodi, consequuntur praesentium harum, eaque suscipit, quaerat animi corrupti laboriosam reprehenderit. Maxime, quaerat ducimus?</p>
          </div>
        </div>
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div>
            <img src={assets.secure} width={77} className='mb-3' alt="" />
          </div>
          <div>
            <h4 className='capitalize'>Secure Payment</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ducimus culpa nostrum nihil quidem dolorem ipsam commodi, consequuntur praesentium harum, eaque suscipit, quaerat animi corrupti laboriosam reprehenderit. Maxime, quaerat ducimus?</p>
          </div>
        </div>
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div>
            <img src={assets.delivery} width={77} className='mb-3' alt="" />
          </div>
          <div>
            <h4 className='capitalize'>Fast Delivery</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ducimus culpa nostrum nihil quidem dolorem ipsam commodi, consequuntur praesentium harum, eaque suscipit, quaerat animi corrupti laboriosam reprehenderit. Maxime, quaerat ducimus?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures