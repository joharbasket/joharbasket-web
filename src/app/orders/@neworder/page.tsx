//orders/@neworder/page.tsx


import Orders from '@/components/Orders/Orders'
import React from 'react'
import { OrderType } from '@/lib/constants'
export default function NewOrder() {
  
  return (
    <Orders  orderType={OrderType.NEW}/>
  )
}
