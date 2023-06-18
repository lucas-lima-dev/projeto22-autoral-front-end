import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignIn/SignInPage'
import SignUpPage from './pages/SignUp/SignUpPage'
import HomePage from './pages/Home/HomePage'


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/users/sign-up" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
