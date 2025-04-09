'use client'

import { Input, Button } from '@nextui-org/react'
import Link from 'next/link'
import SubmitButton from './SubmitButton'
import { signinUser } from '@/actions/auth'
import { useFormState } from 'react-dom'

const initState: { message: string | null } = { message: null }

const SigninForm = () => {
  const [formState, action] = useFormState(signinUser, initState)
  return (
    <form action={action} className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 ">
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />
      <SubmitButton label="Sign In" type="submit" />

      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
      {formState.message && (<p>{formState.message}</p>)}
    </form>
  )
}

export default SigninForm
