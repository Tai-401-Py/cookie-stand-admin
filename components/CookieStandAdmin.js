import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useResource from '../hooks/useResource'


const CookieStandAdmin = (props) => {
    
  const { resources } = useResource();

    return (
      <>
        <Header />
        <Main 
        />
        <Footer
        stands = {resources || []}
        />
      </>
    )
}
  
export default CookieStandAdmin