//components/Oreders/Orders.tsx

"use client";
import { OrderType } from '@/lib/constants';
import Loading from '@/components/Loading';
import OrdersCard from '@/components/Orders/OrderCard'
import { getOrders, getPastOrders } from '@/lib/features/orders/orderSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import { parseISO, isWithinInterval, subDays, subHours } from 'date-fns';
import { FcSearch } from "react-icons/fc";

import type { Order } from '@/lib/features/orders/orderSlice';
import { useDisclosure, useInterval } from '@chakra-ui/react';
import OrderSearch from '@/components/Orders/OrderSearch'
import { useRouter } from 'next/navigation';
export default function Orders({ orderType }: { orderType: OrderType }) {
  const dispatch = useAppDispatch();
  const subOrder = orderType === OrderType.PAST ? "pastOrders" : "data";
  const data = useAppSelector(state => state.orderReducers[subOrder])  
  const loading = useAppSelector(state => state.orderReducers.loading)
  const user = useAppSelector(state => state.authReducer.user);
  const router = useRouter();

  useEffect(() => {
    if(orderType === OrderType.PAST) {
      dispatch(getPastOrders(user?.token))
    } else {
      dispatch(getOrders(user?.token))

    }
    const interval = setInterval(() => {
      if(orderType === OrderType.PAST) {
        dispatch(getPastOrders(user?.token))
      } else {
        dispatch(getOrders(user?.token))
  
      }
    }, 60000)
    return () => {
      clearTimeout(interval);
    }
  }, [dispatch, user, orderType])
  const [orders, setOrders] = useState<any[]>(data);
  const [range, setRange] = useState('all')
  useEffect(() => {
    let currentDate = new Date();
    let sevenDaysAgo = subDays(currentDate, 7);
    let twentyFourHoursAgo = subHours(currentDate, 24);
    const filtered = data!.filter((o) => {
      let date = new Date();
      if (o?.orderTime) {
        date = o?.orderTime;
      }
      let c1 = true;
      if (range === 'today') {
        c1 = isWithinInterval(date, { start: twentyFourHoursAgo, end: currentDate });
      } else if (range === 'week') {

        c1 = isWithinInterval(date, { start: sevenDaysAgo, end: currentDate });
      }
      let c2 = true;
      if (orderType === OrderType.NEW) {
        c2 = (o?.isDelivered === false && o.isAccepted === false)
      } else if(orderType === OrderType.PENDING){
       c2 =  (o?.isDelivered === false && o.isAccepted === true)
      } else {
        c2 = true;
      }
      return c1 && c2;
    })
    setOrders(filtered)
  }, [setOrders, data, range, orderType])

  const { onOpen, onClose, isOpen } = useDisclosure();
  const isAdmin = user && user!.isAdmin;
  if (!isAdmin) {
    setTimeout(() => {
      router.back()
    }, 5000)
  }
  return (
    <div className='flex flex-col mt-6 mx-4 gap-5 justify-center items-center '>
      <div className='w-full justify-end flex gap-4 items-center'>
        <div>  <button onClick={onOpen}
          className=' bg-white px-4 py-2 rounded-lg'
        > <FcSearch className='' /></button>
          <OrderSearch onClose={onClose} onOpen={onOpen} isOpen={isOpen} sub={orders} /></div>
        <label htmlFor="time-range" className='text-white font-bold text-md'></label>
        <select name="time-range" id="time-range" className='rounded-md min-w-max px-2 py-1' value={range} onChange={e => {
          setRange(e.target.value)
        }}>
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="week">Past 7 days</option>
        </select>
      </div>
      {
        orders.length > 0 && (orders.map((v) => <OrdersCard key={v?.orderId} details={v} />))
      }
      {/* {
        data!.length > 0 ? (data!.reduce((acc: any[], v) => {
          if (v?.isAccepted === false && v.isDelivered === false) {
            acc.push(<OrdersCard details={v} key={v.orderId} />)
          }
          return acc;
        }, []
        )) : <div className='w-full h-screen'><Loading /></div>
      } */}
    </div>

  )
}