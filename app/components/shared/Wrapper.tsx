import React, { FC, ReactNode } from 'react'

interface WrapperProp {
    children: ReactNode;
    className?: boolean;
    paddedY?: boolean;
}

const Wrapper:FC<WrapperProp> = ({children, className = true, paddedY = false}) => {
  return (
    <section className={`${className ? "xl:container mx-auto" : ""} ${paddedY ? "py-10 xl:py-20" : ""} py-5`}>{children}</section>
  )
}

export default Wrapper