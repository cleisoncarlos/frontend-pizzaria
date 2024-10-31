
"use client"
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import imgLogo from '/public/logo.svg'
import {LogOut} from 'lucide-react'
import { deleteCookie  } from 'cookies-next'
import { useRouter } from 'next/navigation'


export default function Header() {
    // useRouter so pode ser usado em 'use client'
    const router = useRouter()
  // deleta o cookie pra deslogar  e redirecionar
async function handleLogout(){
    deleteCookie('session', {path: '/'})
    router.replace('/')
}







  return (
 <header className={styles.headerContainer}>
    <div className={styles.headerContent}>

        <Link href='/dashboard'>
<Image
src={imgLogo}
alt='logo'
width={190}
height={60}
/>
</Link>

<nav>

    <Link href='/dashboard/category'>
    Categoria 
    </Link>

    <Link href='/dashboard/product'>
    Produto 
    </Link>

    <form action={handleLogout} >
        <button type='submit'>
        <LogOut size={24} color='#fff' />
        </button>
    </form>


</nav>

    </div>
 </header>
  )
}
