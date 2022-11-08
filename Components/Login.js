import { useRouter } from 'next/router';
import React, { Fragment, useRef, useState } from 'react'

const Login = () => {
  const input = useRef()
  const router = useRouter()
  
  const onSubmitHandler =(event) =>{
    event.preventDefault()
    console.log({})
    router.push(`/${input.current.value}`)
  }

  return (
    <Fragment>
      <div>Login component</div>
      <form onSubmit={onSubmitHandler}>
      <input ref={input} ></input>
      </form>
    </Fragment>
  );
}

export default Login