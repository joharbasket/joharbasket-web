'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from '../lib/store'
// import { initializeCount } from '../lib/features/counter/counterSlice' 
import { PersistGate } from 'redux-persist/integration/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <ChakraProvider>
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </ChakraProvider>
  )
}