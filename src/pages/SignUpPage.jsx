import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from 'context/AuthContext'
import Swal from 'sweetalert2'

const SignUpPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { register, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) return navigate("/todo")
  }, [navigate, isAuthenticated])

  async function handleRegister(username, email, password) {
    try {
      if (!username.length) return
      if (!email.length) return 
      if (!password.length) return

      const success = await register(username, email, password)

      if (success) {
        return Swal.fire({
          title: '註冊成功!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
          position: 'top'
        })
      }

      Swal.fire({
          title: '註冊失敗!',
          icon: 'error',
          showConfirmButton: false,
          timer: 1000,
          position: 'top'
      })
    } catch (e) {
      console.error(e)
    }
  }


  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

      <AuthInputContainer>
        <AuthInput 
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={nameInputValue => setUsername(nameInputValue)} 
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="email"
          label="email"
          placeholder="請輸入email"
          value={email}
          onChange={emailInputValue => setEmail(emailInputValue)} 
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          placeholder="請輸入密碼"
          value={password}
          onChange={passwordInputValue => setPassword(passwordInputValue)} 
        />
      </AuthInputContainer>
      <AuthButton
        onClick={() => handleRegister(username, email, password)}
      >註冊</AuthButton>
      <Link to="/login">
       <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
