import React, { useEffect } from 'react'
import { NetflixLogo, USER_ICON } from '../utils/constant'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../Redux /Slices/userSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
     
  useEffect(()=>{
       
    //onAuthStateChange is a observer which keep an eye over the authenthication state change (Login,logout) and that'swhy we keep it inside useEffect to mount the observer once(not in every render of the component)
    // onAuthStateChange saves us from dispatching action in each sign in and sign up logic, instead acts as a central place to dispatch actions based on auth state change which is being observer by the onAuthChange function provided by the Firebase.

    const unsubscribe = onAuthStateChanged(auth,(user) => {
        if (user) {
          // User is signed in
          const {uid,email,displayName}= user;
           dispatch(addUser({uid:uid,email:email,displayName:displayName}));
           navigate("/browse");
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
  
        }
      }
      )

      return ()=>{unsubscribe();} // cleanup function - as we are adding a observer service (if not cleaned then on each referesh a new eventListner or observer will be added to the Header component)

},[]);

const handleSignOut = ()=>{
       
  signOut(auth).then(() => {
    //naviagtion handel by useEffect on header compnent using OnAuthChange function of firebase
    navigate("/")
  
  }).catch((error) => {
    // An error happened.
    console.log(`Error (Browse Page) -> ${error}`);
  });
}
const user = useSelector((store)=>(store?.user));
const name = useSelector((store)=>store?.user?.displayName);
  return (
    <div className='absolute px-9 py-3 flex justify-between w-screen bg-gradient-to-b from-black z-10 '>
    
    <img className="w-36 " src={NetflixLogo} alt="logo" />
    <div className='flex py-3'>

    { user && <>
    <div className='flex flex-col'>
    <img src={USER_ICON} alt='userProfileIcon' className='w-6 h-6 ' />
    
    </div>
    <div className='flex'>
     <p className='text-sm font-medium py-2 text-white' >{name}</p>
      <p className='text-xs py-[14px] text-white cursor-pointer' onClick={handleSignOut}> (sign out)</p>
    </div>

    </>}
    
    </div>
</div>
  )
}

export default Header