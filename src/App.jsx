import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import SignInPage from './pages/SignIn/SignInPage'
import Header from './components/Header/Header'
import SignUpPage from './pages/SignUp/SignUpPage'


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/users/sign-up" element={<SignUpPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
