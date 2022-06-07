import react from 'react'
import SubmissionForm from '../components/SubmissionForm'
import { useState } from 'react'

const Main = () => {

    const storeData = {
        location: '',
        minCustomers: 0,
        maxCustomers: 0,
        avgCookies: 0,
    };
    
    const [locInfo, setLocInfo] = useState(storeData)
    const [infoString, setInfoString] = useState('')

    function createData(values){
        console.log(values)
        setLocInfo(values)
        setInfoString(JSON.stringify(locInfo))
}


    return (
      <>
        <main className='bg-green-300 w-1/2 flex flex-col items-center mx-auto rounded mt-6'>
          <SubmissionForm
          createData = {createData}/>
        </main>
        <p className='text-center text-sm py-6'>Report Table Coming Soon...</p>
        <p className='text-center text-sm py-6'>{infoString}</p>

      </>
    )
  }

export default Main
