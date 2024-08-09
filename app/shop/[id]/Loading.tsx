import LoadingSkeleton from '@/app/components/shared/LoadingSkeleton'
import React, { FC } from 'react'

interface LoadingProps {
  oneProduct?: boolean;
}

const Loading:FC<LoadingProps> = ({oneProduct = false}) => {
  return (
    <LoadingSkeleton oneProduct={oneProduct} />
  )
}

export default Loading