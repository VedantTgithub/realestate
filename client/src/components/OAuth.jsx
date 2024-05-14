import React from 'react'
import { app} from '../firebase';
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth';

const handleGoogleClick = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const result = await signInWithPopup(auth, provider);
    console.log(result);
  }
  catch (error) {
    console.log('could not sign in with google');
  }
};


function OAuth() {
  return (
    <button onClick={handleGoogleClick}
    type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Continue With Google</button>
  )
}

export default OAuth;