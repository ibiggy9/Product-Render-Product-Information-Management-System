import React, {useEffect} from 'react'
import {auth} from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'



export default function PrivateRoute({children}) {
  const navigate = useNavigate()
  const {firstLogin} = useAuth()

  useEffect(()=> {
    onAuthStateChanged(auth, (currentUser) => {
      if(!currentUser && !firstLogin){
        navigate('/login')
      }
    })
  }, [])


  return (
    <div>
      {auth.currentUser && 
        <div>
          {children}
          </div>
          }
    </div>
  )
}
