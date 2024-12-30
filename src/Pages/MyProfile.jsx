import { useState } from 'react'
import { assets } from '../assets/assets_client/assets';

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjames@gmail.com',
    phone: '+1 123 456 7890',
    address:{
      line1: '57th Cross Richmond',
      line2: 'Circle, Church Road, London'
    } ,
    gender: 'Male',
    dob: '28/04/2005'
  });

  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className='flex flex-col max-w-lg gap-2 text-sm'>
        
      <img className='rounded w-36' src={userData.image} alt="" />

      {
        isEditable
        ? <input className='mt-4 text-3xl font-medium bg-gray-50 max-w-60' type='text' onChange={e => setUserData(prev => ({...prev, name: e.target.value}))} value={userData.name} />
        : <p className='mt-4 text-3xl fonr-medium text-neutral-800'>{userData.name} </p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none ' />
      <div>
        <p className='mt-3 underline text-neutral-500'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium '>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium '>Phone Number:</p>
          {
            isEditable
            ? <input className='bg-gray-100 max-w-52' type='text' onChange={e => setUserData(prev => ({...prev, phone: e.target.value}))} value={userData.phone} />
            : <p className='text-blue-400'>{userData.phone} </p>
          }

          <p className='font-medium'>Address:</p>
          {
            isEditable
            ? <p>
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line1: e.target.value }}))} value={userData.address.line1} type="text" />
                <br />
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line2: e.target.value }}))} value={userData.address.line2} type="text" />
              </p>
            : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p className='mt-3 underline text-neutral-500'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 ' >
          <p className='font-medium'>Gender:</p>
          {
            isEditable
           ? <select className='bg-gray-100 max-w-20' onChange={e => setUserData(prev => ({...prev, gender: e.target.value}))} value= {userData.gender} >
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           </select>
           : <p className='text-gray-400'>{userData.gender} </p>
          }
          <p className='font-medium'>Date of Birth:</p>
          {
            isEditable 
            ? <input className='bg-gray-100 max-w-28' type='date' onChange={e => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob} />
            : <p className='text-gray-400' >{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10' >
        {
          isEditable
         ? <button className='p-8 py-2 transition-all border rounded-full border-primary hover:bg-primary hover:text-white' onClick={() => setIsEditable(false)}>Save Information</button>
         : <button className='p-8 py-2 transition-all border rounded-full border-primary hover:bg-primary hover:text-white' onClick={() => setIsEditable(true)}>Edit</button> 
        }
      </div>



    </div>
  )
}

export default MyProfile;