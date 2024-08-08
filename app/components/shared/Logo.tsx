import Image from 'next/image'
import Link from 'next/link';
import React,{memo} from 'react'

const Logo = () => {
    const LogoImg = '/logo.png';
  return (
    <Link href="/" className="text-xl">
      <Image src={LogoImg} alt="Book Arc" width={100} height={100} />
    </Link>
  );
}

export default memo(Logo);