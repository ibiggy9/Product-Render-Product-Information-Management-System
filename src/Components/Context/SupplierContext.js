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

 import {ref, set, get, child, update, push} from "firebase/database"
 import {auth, db} from '../BasicFunctions/firebase'
 import { useNavigate } from 'react-router-dom'
import { useUpcValidation } from './VerifiyUpcContext'


const SupplierContext = createContext()

export function useSupplierData(){
    return useContext(SupplierContext)
}   

export function SupplierProvider({children}) {
    
    const [notFound, setNotFound] = useState([])
    const [found, setFound] = useState([])
    const [parserIsLoading, setParserIsLoading] = useState()
    const {checkUpc} = useUpcValidation()
    
    async function upcParser(upcList){
        setParserIsLoading(true)
        let notFoundList = []
        let foundList = []
        const a = upcList.split("\n")
        let checkedList = []
        for(let i = 0; i<a.length; i++){
            await new Promise(r => setTimeout(r, 60000));
            if(checkUpc(a[i]) == true){
                console.log(a[i])
                foundList.push(a[i])

                //push(ref(db, "accounts/pepsi/upcList"), a[i])
            } else {
                notFoundList.push(a[i])
                setNotFound(notFoundList)
                console.log(notFoundList)
                
            }
        }
        setFound(foundList)
        setNotFound(notFoundList)
       setParserIsLoading(false)
    }

    function addNewProduct(data){
        
        if(upcParser(data.upcs) == true){
        set(ref(db, "accounts/" + "pepsi/products/upcs"), data) 
        }
    }

    const value = {
        addNewProduct,
        found,
        notFound,
        parserIsLoading
    }

  return (
    <SupplierContext.Provider value={value}>
        {children}
    </SupplierContext.Provider>
  )
}
