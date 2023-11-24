import React from 'react';
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({userArray}) => {
  const navigate = useNavigate();
 const [firstName , setFirstName] = useState('')
 const [phone , setPhone] = useState('')
  const handleSignup = () => {
    navigate('/signup'); // Navigate to the 'signup' route
  };

  const handleChange = (e) =>{
    if(e.target.name === 'firstName')setFirstName(e.target.value)
    if(e.target.name === 'phone')setPhone(e.target.value)
  }
  const handleLogin = () => {
    if (firstName.length >= 3 && phone.length >= 10) {
      console.log('userArray', userArray);
      if(userArray.length === 0 ){
        alert("User is not exits")
      }
      else{
        alert("Yeah Great")
      }
    } else {
      alert('Something went wrong!');
    }
  };


  return (
    <>
      <div className="bg-fixed min-h-screen w-full flex justify-center items-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)), url('/image.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className='w-[30%] mt-16'>
          <div className='flex flex-col bg-gray-200 rounded-sm'>
            <div className='flex  flex-col justify-center items-center'>
              <img src='waleed.png' alt='hamza' height={30} width={30} />
              <h1 className='font-semibold text-3xl m-7 text-center'>Wellcome to restaurant port of food mania</h1>
              <p className='mb-6 text-base '>Log into your account</p>
              <input className='bg-gray-100 py-3 px-2 w-[90%] m-2 rounded-md text-lg' placeholder='E-mail' onChange={handleChange} value={firstName} name='firstName'/>
              <input className='bg-gray-100 py-3 px-2 w-[90%] m-2 rounded-md text-lg' placeholder='password' onChange={handleChange} value={phone} name='phone' />
              <button className='mt-2 mb-4 w-[90%] px-2 text-lg font-medium rounded-md py-3 hover:bg-gray-700 hover:text-gray-900 bg-slate-900 text-white transition duration-300 ease-in-out transform' onClick={handleLogin}>Login</button>
              <p className='float-right pr-4 pb-3 text-base'>forgot password</p>
            </div>
          </div>
          <div className='my-4 bg-gray-200 rounded-sm items-center flex flex-col'>
            <p className='text-base pt-3 pb-2 px-4'>
              Reach new customers and increase your sales by joining the largest delivery platform in the region.
            </p>
            <button className='border-2 border-gray-800 mt-2 mb-4 w-[90%] px-2 text-lg font-medium rounded-md py-3 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out transform' onClick={handleSignup}>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
