import Orders from "./components/orders";
import { api } from "@/services/app";

import {getCookiServer} from '@/lib/cookieServer'
import { OrderProps } from "@/lib/order.type";




async function getOrders(): Promise<OrderProps[] | []> {
  try {

    const token = await getCookiServer()

    const response = await api.get('/orders', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    return response.data || []

  }
  catch(err){
    console.log(err)
    return[]
  }
  
}


export default async function Dashboard() {

const orders = await getOrders()

//console.log(orders)


  return (
   <Orders orders={orders} />
  )
}
