import styles from './styles.module.scss'
import { Button } from '../components/button'
import { api } from '@/services/app'
import {getCookiServer} from '@/lib/cookieServer'
// redirect so funciona no server component
import {redirect} from 'next/navigation'


export default function Category() {
    async function handleRegisterCategory(formData: FormData){
        "use server"
      //  console.log('teste')
      const name = formData.get('name')

      if(!name) {
        return
      } 

      const data = {
        name: name
      }


const token = await getCookiServer()

      await api.post('/category', data, {
        headers: {
          Authorization: `Brearer ${token}`
        }
      })
      .catch((err) => {
        console.error(err);
        return
      })

      redirect('/dashboard')

    }

  return (
    <main className={styles.container}>
    <h1>Nova Categoria</h1>

    <form 
      className={styles.form}
      action={handleRegisterCategory}
    >
      <input 
        type="text"
        name="name"
        placeholder="Nome da categoria, ex: Pizzas"
        required
        className={styles.input}
      />
      <Button name='Cadastrar categoria' />
    </form>
  </main>
  )
}
