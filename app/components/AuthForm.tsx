"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Form
} from "@/components/ui/form"

import { toast } from "sonner"
import FormField from "./FormField"

/* 
we rewrite this loine pf code with a more updated code to make it dynamic,
const formSchema = z.object({
  username: z.string().min(2).max(50),
}) */

const authFormSchema = (type: FormType) => {
    return z.object({
        name:type ==='sign-up' ? z.string().min(3): z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    })
}

const AuthForm = ({type}: {type: FormType}) => {
    const router = useRouter()

const formSchema = authFormSchema(type)
     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: '',
        email: '',
        password: '',
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try{
        if(type ==='sign-up'){
            toast.success('account created succesfully. please sign in.')
            router.push('/sign-in')
        } else {
            toast.success('signed in succesfully.')
            router.push('/')
        }
    }catch(error){
        console.log(error);
        toast.error(`There was an error: ${error}`)
    }
  }

  const isSignIn = type ==='sign-in'

  return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" height={32} width={32}/>
                <h2 className="text-primary-100">PrepWise</h2>
            </div>
            <h3>Practice job interviews with AI</h3>
        
        <Form {...form}>
            <form className="w-full space-y-6 mt-4 form"onSubmit={form.handleSubmit(onSubmit)} >
            {!isSignIn && <FormField control={form.control} name='name' label='Name' placeholder="Your Name"/>
            }
            <FormField control={form.control} name='email' label='Email' placeholder="Your Email"/>
            <FormField control={form.control} name='password' label='Password' placeholder="Enter your password" type='password'/>
            
          
            <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an account'}</Button>
            </form>
        </Form>

        <p className="text-center">{isSignIn ? 'No account yet?' : 'Have an account alrerady?'}
            <Link className="font-bold text-user-primary ml-1" href={!isSignIn ? '/sign-in' : '/sign-up'}>
                {!isSignIn ? "Sign in" : "Sign up"}
            </Link>
        </p>
        </div>
)
    </div>
  )
}

export default AuthForm