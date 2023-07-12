import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoPage, LoginPage, SignUpPage, HomePage } from './pages';
import { AuthProvider } from './context/AuthContext.jsx';

const basename = process.env.PUBLIC_URL

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />}/>
            <Route path="todo" element={<TodoPage />} />

            {/* 上面三個路徑以外的，用星號表示 */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
