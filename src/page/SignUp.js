import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = ({handleGetStarted}) => {
  const navigate = useNavigate();
  const [firstName ,setFirstName] = useState('')
  const [lastName ,setLastName] = useState('')
  const [email ,setEmail] = useState('')
  const [phone ,setPhone] = useState('')
  // const [userArray , setUserArray] = useState([])
  const handleChange  = (e) =>{
  if(e.target.name === 'firstName')setFirstName(e.target.value)
  if(e.target.name === 'lastName')setLastName(e.target.value)
  if(e.target.name === 'email')setEmail(e.target.value)
  if(e.target.name === 'phone')setPhone(e.target.value)
}

const handleGetStartedClick = () => {
  if (firstName.length >= 3 && lastName.length >= 3 && email.includes('@', '.com') && phone.length >= 10) {
    const data = { firstName, lastName, email, phone };
    // Call the handleGetStarted function passed as a prop
    handleGetStarted(data);
  } else {
    alert("Something went wrong!");
  }
  navigate('/login'); // Navigate to the 'signup' route
};
  // const navigation  = useNavigate()
  // navigation('/AddRestaurant')
    return (
    <>
    <div className="bg-fixed min-h-screen w-full flex justify-center items-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)), url('/image.avif')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className='w-[30%] mt-16 mb-10'>
        <div className='flex flex-col bg-gray-200 rounded-sm'>
          <div className='flex  flex-col justify-center items-center'>
            <img src='waleed.png' alt='hamza' height={30} width={30} />
            <h1 className='font-semibold text-2xl my-7 mx-4'>Let`s start! It should take just few minutes</h1>
            <p className='mb-6 text-base '>Sign Up to explore</p>
            <input className='bg-gray-100 py-3 px-2 w-[90%] m-2 rounded-md text-lg' placeholder='Business Owner First Name*'  onChange={handleChange} name='firstName' value={firstName}/>
            <input className='bg-gray-100 py-3 px-2 w-[90%] m-2 rounded-md text-lg' placeholder='Business Owner Last Name*' onChange={handleChange} name='lastName' value={lastName} />
            <input className='bg-gray-100 py-3 px-2 w-[90%] m-2 rounded-md text-lg' placeholder='Your Business E-mail*' onChange={handleChange} name='email' value={email} />
            <input className='bg-gray-100 py-3 px-2 w-[90%] m-2 rounded-md text-lg' placeholder='Your Bussiness Phone Number*' onChange={handleChange} name='phone' value={phone} />
            <button className='mt-2 mb-4 w-[90%] px-2 text-lg font-medium rounded-md py-3 hover:bg-gray-700 hover:text-gray-900 bg-slate-900 text-white transition duration-300 ease-in-out transform' onClick={handleGetStartedClick}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default SignUp