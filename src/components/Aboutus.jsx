import React from 'react'
import Navbar from './Navbar'
import mainIMG from '../assets/About_us_main.png'

export default function Aboutus() {
  return (
    <div className='w-fit h-fit Aboutus'>
        <Navbar></Navbar>
        <div className='flex flex-col justify-center items-center pl-20 pr-20'>
            <h1 className='text-7xl font-bold'>About us</h1>
              <p className='text-center text-sm font-semibold w-6/12'>Our team comprises experts from diverse backgrounds, including technology, medicine, and fitness. We are passionate about building solutions that can enable a culture of health and improve human performance.</p>
            <img src={mainIMG} alt="" />
              <h2 className='subhead-aboutus'>Making Healthy Happen </h2>
            <p className='text-center w-1/2'>
                  Through our combined expertise, we are dedicated to developing innovative solutions that can help people lead healthier and happier lives. We believe technology can be a powerful tool for promoting healthy habits and practices. We are committed to leveraging our expertise to create solutions that can transform health and well-being.
            </p>
            <p  className='text-center w-1/2'>
                  Our team is focused on delivering solutions backed by our six years of deep research. It can be customized to meet each individual's unique needs. We believe that by empowering people with the tools and resources they need to improve their performance, we can help them achieve their full physical and mental potential.
            </p>
            <p className='text-center w-1/2'>
                  Thank you for considering our team as a partner in your better health and well-being journey. We look forward to working with you to help you achieve your goals and improve your performance.
            </p>

        </div>
    </div>
  )
}
