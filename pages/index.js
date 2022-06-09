import Head from 'next/head';
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';
import CookieStandAdmin from '../components/CookieStandAdmin'

export default function Home() {

  const { user, login } = useAuth();
  return (
    <>
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
    {user? 
      <CookieStandAdmin/>
      :
      <LoginForm onLogin={login}/>
    }
    </>
  )
}

