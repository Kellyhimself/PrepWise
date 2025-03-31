import {ReactNode} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from '@/components/ui/signout'

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <nav className='flex flex-row'>
            <Link href='/' className='flex items-center gap-3'>
                <Image src='/logo.svg' alt='logo' width={38} height={32}/>
                <h2 className='text-primary-100'>PrepWise</h2>
            </Link>
            <LogoutButton />
        </nav>
        {children}
    </div>
  )
}

export default RootLayout