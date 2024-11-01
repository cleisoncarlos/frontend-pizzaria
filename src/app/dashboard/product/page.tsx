import {Form} from './components/form'
import { api } from '@/services/app'
import { getCookiServer } from '@/lib/cookieServer'

export default async function Product() {

  const token = await getCookiServer()

  const response = await api.get('/category', {
    headers: {
      'Authorization': `Bearer ${token}`
      }
  })

 // console.log(response.data)

  return (
<Form categories={response.data} />
  )
}
