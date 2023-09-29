'use client';
import Image from "next/image";

import { useRouter } from "next/navigation";

const Logo = ()=>{
    const router=useRouter();
    return (
        <Image
        src="/images/logo.jpg"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    )
}

export default Logo;