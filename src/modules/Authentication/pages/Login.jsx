import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import Modal from '../components/Modal/Modal'

const Login = () => {
  return (
    <div className="bg-all">
    <Header/>
    <div className='py-5 mt-5'>
    <Modal/>
    </div>
    <Footer/>
    </div>
  )
}

export default Login