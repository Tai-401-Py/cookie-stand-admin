
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
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

