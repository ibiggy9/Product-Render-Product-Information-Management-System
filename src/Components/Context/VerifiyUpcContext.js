import React, {createContext, useContext, useEffect, useState} from 'react'


const VerifyUpcContext = createContext()

export function useUpcValidation(){
    return useContext(VerifyUpcContext)
}   

export function UpcProvider({children}) {
    const [apiError, setApiError] = useState()
    
    async function checkUpc(barcode){
      var outcome = null;
      const barcoder = 9781637741580
      const proxyUrl = 'https://calm-gorge-57525.herokuapp.com/'
      const apiKey = 'xi3i6mr1yqif3pzmm1fs15en03idoa'
      const url = proxyUrl + `https://api.barcodelookup.com/v3/products?barcode=${barcode}&formatted=y&key=${apiKey}`
      var myHeaders = new Headers();
      
      
     
      myHeaders.append('Accept', 'application/json' );

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => 
          checkCompanyMatches(result.products[0]), outcome = true)
        .catch(error => console.log(error), outcome = false);
      

      if(outcome == true){
        console.log("returned true")
        return true
      } else {
        console.log("Returned false")
        return false
      }
    }

    // When upc match is found, check it here to ensure it matches the account to ensure ownership. 
    function checkCompanyMatches(productData){
      console.log(productData)
    }

    
    const value = {
        checkUpc,
        apiError,
        setApiError,
    }

  return (
    <VerifyUpcContext.Provider value={value}>
        {children}
    </VerifyUpcContext.Provider>
  )
}
