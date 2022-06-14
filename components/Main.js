import SubmissionForm from '../components/SubmissionForm'
import SalesTable from '../components/SalesTable';

import useResource from '../hooks/useResource'

const Main = () => {
  
  const { resources, deleteResource } = useResource();


  return (
    <>
      <main className='bg-emerald-300 w-1/2 flex flex-col items-center mx-auto rounded my-6'>
        <SubmissionForm
        />
      </main>
      <SalesTable
        stands={resources || []} 
        deleteStand={deleteResource}
      />
    </>
  )
}

export default Main
