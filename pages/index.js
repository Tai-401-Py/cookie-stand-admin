
import styles from '../styles/Home.module.css'
import SubmissionForm from '../components/SubmissionForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer
        copyright="2022"
      />
    </>
  )
}

const Main = (props) => {
  return (
    <>
      <main className='bg-green-300 w-1/2 flex flex-col items-center mx-auto rounded mt-6'>
        <SubmissionForm/>
      </main>
      <p>Report Table Coming Soon</p>
    </>
  )
}
