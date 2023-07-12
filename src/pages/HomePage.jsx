import { useAuth } from 'context/AuthContext'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) return navigate("/todo")
    navigate("/login")
  }, [navigate, isAuthenticated])
};

export default HomePage;
