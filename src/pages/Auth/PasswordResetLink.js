import React from 'react'
import ttlogo from '../../assets/ttlogowhite.png'

const PasswordResetLink = () => {
  return (
    <>
        <div className='h-screen w-full bg-[#EAFEF5]'>
            <div className='h-[40%] bg-[#01091C]'></div>
            <div className=''>
                <div>
                    <div>
                        <img src={ttlogo} alt='logo'/>
                    </div>
                    <div className='bg-white'>
                        <p>Forgot your password?</p>
                        <div className='bg-[#EAFEF5]'>
                            <p>Enter your email to reset and reclaim access to Tavi Trades for financial insights and advanced tools.</p>
                        </div>
                        <div>
                            <form>
                                <div>
                                    <input placeholder='Email address'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PasswordResetLink