import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import SignInPage from './pages/SignIn/SignInPage'
import Header from './components/Header/Header'


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
