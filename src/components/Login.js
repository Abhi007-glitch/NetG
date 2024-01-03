import React, { useState ,useRef} from 'react'
import Header from './Header'
import { checkDataFormateValidity } from '../utils/validate';
import {  signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux /Slices/userSlice';
import {  LoginPageBackGroundImage } from '../utils/constant';
const Login = () => {
    
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [Error,setError]= useState(null);

    const password = useRef(null);  // password is being used as reference to the input box in the below form (means password store whole input element in the form of object )
    const email = useRef(null);
    const name = useRef(null);
   
    const dispatch = useDispatch();
    

    const handelDataSubmit = ()=>{

        // pahse I- data formate validation 
        //    console.log(email.current.value);  //extracting value that is stored inside html element that is referenced by the email variable.
        //    console.log(password.current.value);

           const validity = checkDataFormateValidity(email.current.value,password.current.value);   
          
           console.log("VALIDITY",validity);
           setError(validity);
           if (validity) return;



           // Pahse 2 : validating password value and login or sign up 
           
           //checking if it's a login request 
          

           if (!isSignInForm)
           {
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
              // automatically Sign in User after getting signedUP
              const user = userCredential.user;
           

              updateProfile(user, {
                displayName: name.current.value //  name is a referenced variable object 

              }).then(() => {
                // Profile updated!
                const {displayName,email,uid,password}= auth.currentUser;
                dispatch(addUser({uid:uid,displayName:displayName, email:email , password:password}))
                
              }).catch((error) => {
                // An error occurred
                console.log(`Error (Login Page )-> ${error}`)
                // ...
              });
              //naviagtion to browse page handel by useEffect on header compnent using OnAuthChange function of firebase
              console.log(`Signed Up User : ${user}`);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError(errorMessage+" "+errorCode);
              
            });

           }
           else 
           {
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
             //naviagtion to browse page handel by useEffect on header compnent using OnAuthChange function of firebase
          
             
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError(errorMessage+" "+errorCode);
            });
           };
 

    };

    
  

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={LoginPageBackGroundImage} alt="backgroundImage" />
            </div>

            <form onSubmit={(e)=>{e.preventDefault()} } className=' absolute w-3/12 bg-black p-16 my-36 mx-auto right-10 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{(isSignInForm === true) ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input ref={name} type='text' className=' p-4 my-4 w-full bg-gray-700' placeholder='Full Name' />)}

                <input ref={email} type='text' className=' p-4 my-4 w-full bg-gray-700' placeholder='Email Address ' />
                <input ref={password} type='password' className='p-4 my-4 w-full bg-gray-700' placeholder='Password' />
                <p className='text-red-500 text-lg text-bold py-2'>{Error}</p>
                <button onClick={handelDataSubmit} className='p-4 my-6 bg-red-700 w-full rounded-lg' >{(isSignInForm === true) ? "Sign In" : "Sign Up"}</button>
                <p className='my-4 cursor-pointer' onClick={toggleSignInForm}> {(isSignInForm === true) ? "New to Netflix? Sign Up Now" : "Alreday registered? Sign In Now"}</p>
            </form>

        </div>
    )
}

export default Login