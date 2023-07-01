import React from 'react'
import '../index.css'
import { ReactComponent as Cross } from '../assets/Register_cross.svg';
import { ReactComponent as Google } from '../assets/logos_google-icon.svg'
import { ReactComponent as Facebook } from '../assets/logos_facebook.svg'
import left from '../assets/Register_left.png'
import right from '../assets/Register_right.png'
import { ReactComponent as Group16 } from '../assets/Group 16.svg'
import { ReactComponent as Group275 } from '../assets/Group 275.svg'
import { ReactComponent as Group276 } from '../assets/Group 276.svg'
import { ReactComponent as Group277 } from '../assets/Group 277.svg'


export default function Register() {
    return (
        <div className='Register'>
            <img src={left} className='absolute left-0 bottom-0 w-96 h-96' alt="" />
            <img src={right} className='absolute right-0 bottom-0 w-96 h-96' alt="" />
            <Group16 className='absolute left-14 top-4'></Group16>
            <Group275 className='absolute top-8 right-5'></Group275>
            <Group276 className='absolute top-52 right-20'></Group276>
            <Group277 className='absolute bottom-60 left-28'></Group277>
            <div className='Register-box'>
                <div className='flex justify-center items-center mt-3'>
                    <p className='Register-text'>
                        Register
                    </p>
                </div>
                    <Cross className='absolute right-12 top-8'></Cross>
                <form className='flex flex-col justify-center items-center mt-14'>
                    <input type="text" className='Register-input mb-5' placeholder='User Name' />
                    <input type="password" className='Register-input' placeholder='Password' />
                    <p className='R-text'>Registration confirmation will be emailed to you.</p>
                    <button className='Register-button'>Register</button>
                    <p className='text-xs font-bold'>continue with</p>
                    <div className='flex mt-2 justify-between  h-4 cursor-pointer'>
                        <Google className='mr-4'></Google>
                        <Facebook></Facebook>
                    </div>
                </form>
            </div>
        </div>
    )
}
