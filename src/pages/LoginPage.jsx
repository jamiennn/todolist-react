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


const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate("/todo")
  }, [navigate, isAuthenticated])


  async function handleClick(username, password) {
    try {
      if (!username.length) return 
      if (!password.length) return

      const success = await login(username, password)
      if (success) {
        return Swal.fire({
          title: '登入成功!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
          position: 'top'
        })
      }
      Swal.fire({
          title: '登入失敗!',
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
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          name="username"
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={nameInputValue => setUsername(nameInputValue)} />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          name="password"
          type="password"
          label="密碼"
          placeholder="請輸入密碼"
          value={password}
          onChange={passwordInputValue => setPassword(passwordInputValue)} />
      </AuthInputContainer>
      <AuthButton
        onClick={() => handleClick(username, password)}
      >登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText

        >註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
