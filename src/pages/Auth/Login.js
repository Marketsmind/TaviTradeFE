import React from 'react'
import ttlogowhite from '../../assets/ttlogowhite.png'
import authimg from '../../assets/authsideimg.png'
import or from '../../assets/or.png'
import googlelogo from '../../assets/GoogleLogo.png'

const Login = () => {
  return (
    <>
      <div className='bg-[#01091c] flex justify-center items-center h-full 2xl:h-screen w-full py-10 px-28 overflow-y-auto'>
        <div className='flex w-full h-full'>
          <div className='w-[60%] flex flex-col gap-y-10'>
            <div className='w-[20%] '>
              <img src={ttlogowhite} alt='logo' />
            </div>
            <div className='w-full h-full flex  items-center'>
              <div className='w-[70%] '>
                <img src={authimg} alt='auth image' />
              </div>
            </div>
          </div>
          <div className='w-[40%] h-full flex justify-center items-center'>
            <div className='bg-[#343A49] bg-opacity-50 w-full h-full flex justify-center items-center p-10 px-5'>
              <div className='flex flex-col gap-y-8'>
                <div className='text-center'>
                  <p className='text-[#CE90F3] font-bold text-3xl'>Welcome Back</p>
                  <p className='text-[#E6E6E8]'>Log in for real-time news, powerful tools, broker reviews, and AI-driven market analysis.</p>
                </div>
                <div className='w-full flex justify-center'>
                  <button className='bg-[white] flex items-center gap-x-3 justify-center text-black font-semibold p-5 rounded-xl w-[316px] h-[48px]'>
                    <img src={googlelogo} alt='google' />
                    <p>Continue with Google</p>
                  </button>
                </div>
                <div className='flex justify-center items-center w-full'><img src={or} alt='--' /></div>
                <div className='w-full justify-center'>
                  <div className='flex justify-center items-center'>
                    <button className='bg-[#343A49] text-white px-2 hover:text-black hover:bg-[#2AF69F] h-[48px] rounded-l-lg'>Create my account</button>
                    <button className='bg-[#343A49] text-white px-2 hover:text-black hover:bg-[#2AF69F] h-[48px] rounded-r-lg'>Login to my account</button>
                  </div>
                </div>
                <div>
                  <form className='flex flex-col gap-y-8'>
                    <div>
                      <input placeholder='Enter your email' className='w-full h-[48px] px-2 rounded-md' />
                    </div>
                    <div className='bg-white w-full h-[48px] rounded-md overflow-hidden'>
                      <input type='password' placeholder='Enter your password' className=' h-[48px] w-[80%] px-2' />
                      <button className='bg-[#D0EBC9] h-full w-[20%]'>Show</button>
                    </div>
                    <div className='flex justify-between w-full'>
                      <label className='text-white flex items-center'>
                        <input type='checkbox' className='px-2' />
                        <span className='ml-2'>Remember me</span>
                      </label>
                      <p className='text-[#CE90F3] cursor-pointer'>Forgot password?</p>
                    </div>
                    <div className='w-full flex justify-center'>
                      <button className='bg-[#2AF69F] h-[48px] w-[204px] font-semibold rounded-full'>Login with Tavi</button>
                    </div>
                  </form>
                  <div className='w-full flex justify-center items-center pt-8 text-[white] text-normal'>
                    <p>Don't have an account? <span className='text-[#CE90F3] cursor-pointer'>Create account</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login