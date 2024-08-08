import LoadingSkeleton from '@/app/components/shared/LoadingSkeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className="justify-center items-center max-w-md mx-auto">
        <LoadingSkeleton />
    </div>
  )
}

export default Loading