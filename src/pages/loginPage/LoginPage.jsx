import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.scss'
const LoginPage = () => {
  const navigate = useNavigate()

  const handlePageRegister = () => {
    navigate("/login-layout/register")
  }

  const handleLogin = () => {
    navigate("/")
  }

  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='login__form'>
                <div className='login__form--heading'>
                    <h3>Login account</h3>
                    <span>Let's experience new and wonderful things together</span>
                </div>
                <form >
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <span onClick={handlePageRegister}>I don't have an account?</span>
                    <div className='login__btn'>
                        <button className='login__btn--signin' onClick={handleLogin}>Sign in</button>
                        <button className='login__btn--google'>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt="" />
                          <span>Sign in with Google</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className='login__banner'>
                <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    </div>
  )
}

export default LoginPage