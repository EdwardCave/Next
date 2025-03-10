import React from 'react'
import Image from 'next/image'
type Props={
    image:string
    title:string
}
const ChooseCard = ({image,title}:Props) => {
  return (
    <div>
        {/*Image*/}
        <Image src={image} width={70} height={70} alt={title} className=' mx-auto object-cover'/>
        {/*Title*/}
        <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{title}</h1>
        <p className='text-center mt-2 text-xs font-medium text-gray-700'> lori content is good idea</p>
    </div>
  )
}

export default ChooseCard