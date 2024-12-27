import React from 'react'
import { MdCurrencyExchange } from 'react-icons/md'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiSupport } from 'react-icons/bi'
import { TbPackageImport } from 'react-icons/tb'

const Features = () => {
  return (
    <section className='max-padd-container bg-primary mt-16 xl:mt-18 py-8 rounded-xl flex justify-center'>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-12 lg:gap-20">
        
        <div className='flexCenter gap-x-4'>
          <LiaShippingFastSolid className="text-4xl" />
          <div>
            <h5 className='medium-18'>Free Shopping</h5>
            <p>on above $100 order</p>
          </div>
        </div>
        
        <div className='flexCenter gap-x-4'>
          <MdCurrencyExchange className="text-4xl" />
          <div>
            <h5 className='medium-18'>Free Shopping</h5>
            <p>on above $100 order</p>
          </div>
        </div>

        <div className='flexCenter gap-x-4'>
          <BiSupport className="text-4xl" />
          <div>
            <h5 className='medium-18'>Free Shopping</h5>
            <p>on above $100 order</p>
          </div>
        </div>
        
        <div className='flexCenter gap-x-4'>
          <TbPackageImport className="text-4xl" />
          <div>
            <h5 className='medium-18'>Free Shopping</h5>
            <p>on above $100 order</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Features