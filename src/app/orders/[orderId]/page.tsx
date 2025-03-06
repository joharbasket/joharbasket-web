//orders/[orderId]/page.tsx

import React from 'react'
import OrderWithId from "@/components/Orders/OrderWithId"
type Params = {
    params: {
        orderId: string
    }
}
export default function Order({params} : Params) {
    const orderId = params.orderId;
  return (
    <OrderWithId orderId={orderId}/>
  )
}
