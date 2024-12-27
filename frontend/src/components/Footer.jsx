import React from 'react'
import { Link } from 'react-router-dom'
import Socialicons from './Socialicons'

const Footer = () => {
    return (
        <footer id='contact' className='bg-tertiary max-padd-container text-white py-12 rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                {/* logo and description */}

                <div className='flex flex-col items-center md:items-start'>
                    <Link to={'/'} className='bold-24 mb-4'>
                        <h3>Fusion <span className='text-secondary'>Mart</span></h3>
                    </Link>
                    <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor asperiores exercitationem ab earum porro enim a cum</p>
                </div>

                {/* Quick Links */}

                <div className='flex flex-col items-center md:items-start'>
                    <h4 className='bold-20 mb-4'>Quick Links</h4>
                    <ul className='space-y-2 regular-15 text-gray-30 text-center'>
                        <li><a href="/" className='hover:text-secondary'>Home</a></li>
                        <li><a href="/" className='hover:text-secondary'>Categories</a></li>
                        <li><a href="/" className='hover:text-secondary'>Shop</a></li>
                        <li><a href="/" className='hover:text-secondary'>Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact information */}

                <div className='flex flex-col items-center md:items-start'>
                    <h4 className='text-lg mb-4 '>Contact Us</h4>
                    <p>Email : <a href="" className='hover:text-secondary'>support@fusionmart.com</a></p>
                    <p>Phone No. : <a href="" className='hover:text-secondary'>+123456789</a></p>
                    <p>Address : 12, Lorem, ipsum dolor.</p>
                </div>

            </div>

            <div className='flex flex-col items-center mt-8'>
                <Socialicons />
                <hr className='h-[1px] w-full max-w-screen-md my-4 border-white' />
                <p className='text-center text-sm'>&copy; {new Date().getFullYear()} FusionMart | All rights reserved </p>
            </div>

        </footer>
    )
}

export default Footer