import React, {createContext, useContext, useEffect, useState} from 'react'
import { 
    createUserWithEmailAndPassword, 
    signout,
    onAuthStateChanged, 
    setPersistence,
    browserSessionPersistence,
    getUserByEmail,
    signInWithEmailAndPassword,
    signOut, 
    getAuth,
 } from 'firebase/auth'

 import {ref, set, get, child, update} from "firebase/database"
 import {auth, db} from '../BasicFunctions/firebase'
 import { useNavigate } from 'react-router-dom'


const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}   

export function AuthProvider({children}) {
    const navigate = useNavigate()
    const [firstLogin, setFirstLogin] = useState(false)
    const [user, setUser] = useState()


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)  
        })
        return () =>{unsubscribe()}
    }, [logout, login])

    

    async function login(email, password){
        await setPersistence(auth, browserSessionPersistence)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCreds)=> {
            if(auth.currentUser.email){
                console.log("successful")  
                navigate('/')
                
            }
        
        }).catch((error)=>{
            console.log(error)
            
        })}
    
    async function logout(){
        signOut(auth).then(() => {
        console.log("Signout successful")})
        navigate('/login')
        
        .catch((error) => {
            console.log(error)
        })}

    

    const value = {
        logout, 
        login,
        firstLogin
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
