import SignUpForm from './Components/SignUpForm'
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <>
      <div className='form'>
        <header>
          Sign Up
        </header>
        <SignUpForm />
      </div>
    </>
  )
}

export default App
