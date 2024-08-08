'use client'
import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface ProviderProps {
    children: ReactNode;
}

const Providers:FC<ProviderProps> = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Providers