import React from 'react'
import { Link } from 'react-router-dom'
import { BsFire } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section id='home' className='max-padd-container bg-hero bg-center bg-cover bg-no-repeat h-[777px] w-full'>
      <div className="relative max-w-[666px] top-44 xs:top-72">
        <h4 className='flex items-baseline gap-x-2 uppercase text-secondary medium-18'>Medern collection <BsFire /></h4>
        <h2 className='h1 capitalize'>Grad Upto 20% off on Selecten Products</h2>
        <p className='border-l-4 border-secondary pl-3 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatem. Quos consequatur porro non quidem quas aliquam maxime rem ipsum numquam.</p>

        {/* Button */}

        <div className="flex items-center gap-x-4 mt-7">
          <Link to={""} className='btn-secondary rounded-full flexCenter gap-x-2'>
            Latest Products
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Hero