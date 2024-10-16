import axios from 'axios';
import React, { useState } from 'react';
import { FormData } from './App';

const API_URL = 'http://localhost:5000/server';

const register = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { username, password });
  if (response.data.token) {
    localStorage.setItem('userToken', response.data.token); // Сохраняем токен
  }
  return response.data.user;
};

const login = async (username:string, password:string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  if (response.data.token) {
    localStorage.setItem('userToken', response.data.token);
  }
  return response.data.user; // Возвращает данные пользователя
};

 const logout = () => {
  localStorage.removeItem('userToken');
};

const savedata=async(userData:FormData):Promise<void>=>{
  try {
    const token = localStorage.getItem('userToken'); // Предполагается, что токен JWT сохранен в localStorage после входа пользователя.
    await axios.post(`${API_URL}/saveUserData`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error; // Выбрасываем ошибку, чтобы ее можно было обработать в компоненте
  }
  };



export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(username, password);
      setMessage('User registered successfully');
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
};

interface LoginProps{
  updateState: (newState: FormData) => void;
}

export const Login:React.FC<LoginProps> = ({updateState}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [showAppComp, setShowAppComp]=useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await login(username, password);
      updateState(userData); // Обновляем состояние пользователя в основном приложении
      setMessage('Logged in successfully');

    if (userData.id === 2) {
      setShowAppComp(true);
    } else {
      setShowAppComp(false);
    }

    } catch (error) {
      setMessage('Invalid username or password');
    }


  };



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
};


interface SaveDataProps {
/*   user: { id: number; username: string }; // Информация о пользователе */
  userData: FormData; // Состояние данных пользователя из App.tsx
  setUserData: React.Dispatch<React.SetStateAction<FormData>>; // Функция для обновления состояния данных пользователя
}


export const SaveData: React.FC<SaveDataProps> = ({ userData, setUserData }) => {
  const [message, setMessage] = React.useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await savedata(userData);
      setMessage('User data saved successfully');
    } catch (error) {
      setMessage('Error saving user data');
    }
  };

  return (
    <>
      <button onClick={handleSubmit}>Save Data</button>
      {message && <p>{message}</p>}
    </>
  );
};

