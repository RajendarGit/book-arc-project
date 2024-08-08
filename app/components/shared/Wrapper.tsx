import React, { FC, ReactNode } from 'react'

interface WrapperProp {
    children: ReactNode;
}

const Wrapper:FC<WrapperProp> = ({children}) => {
  return (
    <section className='py-5'>{children}</section>
  )
}

export default Wrapper