import {ReactNode} from 'react'


const AuthLayout = ({children}: {children:ReactNode}) => {
    return(
        <div className='auth-layout'>{children}</div>//classname from global.css
    )
}
export  default AuthLayout