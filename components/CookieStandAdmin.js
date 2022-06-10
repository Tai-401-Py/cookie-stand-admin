import { useState } from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'



const CookieStandAdmin = (props) => {
    
    
    const [numLoc, setNumLoc] = useState(0)

    const passLocNum = () =>{
        let num = numLoc + 1
        setNumLoc(num) 
    }

    return (
      <>
        <Header />
        <Main 
        setNumLoc = {passLocNum}
        />
        <Footer
        numLoc = {numLoc}
        />
      </>
    )
}
  
export default CookieStandAdmin