import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import userSlice, { selectUser } from './features/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login,logout } from './features/userSlice'


function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName,
      }));
    }
    else{
      dispatch(logout());
    }
  })
}, [dispatch])


  return (
    <div className="app">
      {user? (
        <>
        <Sidebar/>
      <Chat/>
      </>
      ): (
        <Login/>
      )}
      
    </div>
  )
}

export default App;
