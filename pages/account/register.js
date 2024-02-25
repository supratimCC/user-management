import AuthLayout from '@/layouts/AuthLayout';
import React from 'react'

export default function Register() {
  return (
    <div>
        <h1>Register</h1>
    </div>
  )
}

Register.getLayout = function getLayout(page){
    return <AuthLayout>{page}</AuthLayout>;
}