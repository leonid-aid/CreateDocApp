import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormData } from './App'; // Импортируйте ваш интерфейс FormData

const API_URL = 'http://localhost:5000/server'; // Используйте правильный API URL

interface User {
  name: string;
  surName: string;
  [key: string]: any; // Указываем, что объект может содержать любые ключи и значения
}

interface UserListProps {
  onUserSelect: (userData: FormData) => void; // Ожидаем объект FormData
}

export const UserList: React.FC<UserListProps> = ({ onUserSelect }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/getAllUsers`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`, // Токен, если требуется
          },
        });
        setUsers(response.data); // Устанавливаем данные пользователей
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <div>
          {users.map((user, index) => (
            <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
              {Object.entries(user).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong> {value || 'N/A'}
                </div>
              ))}
              {/* Кнопка для выбора пользователя */}
              <button
                onClick={() => {
                  console.log('Selected user:', user); // Логируем данные

                  // Создаем объект FormData и заполняем его данными пользователя
                  const formData: FormData = {
                    name: user.name || '',
                    surName: user.surName || '',
                    fathName: user.fathName || '',
                    birthDate: user.birthDate || '',
                    bd1: user.bd1 || '',
                    bd2: user.bd2 || '',
                    bd3: user.bd3 || '',
                    bd4: user.bd4 || '',
                    bd5: user.bd5 || '',
                    bd6: user.bd6 || '',
                    bd7: user.bd7 || '',
                    bd8: user.bd8 || '',
                    male: user.male || '',
                    female: user.female || '',
                    tel: user.tel || '',
                    email: user.email || '',
                    address: user.address || '',
                    city:user.city||'',
                    workBookNum: user.workBookNum || '',
                    passNum: user.passNum || '',
                    issueDate: user.issueDate || '',
                    issuingOrgan: user.issuingOrgan || '',
                    birthPlace: user.birthPlace || '',
                    jmbgNum: user.jmbgNum || '',
                    j1: user.j1 || '',
                    j2: user.j2 || '',
                    j3: user.j3 || '',
                    j4: user.j4 || '',
                    j5: user.j5 || '',
                    j6: user.j6 || '',
                    j7: user.j7 || '',
                    j8: user.j8 || '',
                    j9: user.j9 || '',
                    j10: user.j10 || '',
                    j11: user.j11 || '',
                    j12: user.j12 || '',
                    j13: user.j13 || '',
                    jmbgFrom: user.jmbgFrom || '',
                    jf1: user.jf1 || '',
                    jf2: user.jf2 || '',
                    jf3: user.jf3 || '',
                    jf4: user.jf4 || '',
                    jf5: user.jf5 || '',
                    jf6: user.jf6 || '',
                    jf7: user.jf7 || '',
                    jf8: user.jf8 || '',
                    jmbgTo: user.jmbgTo || '',
                    pib: user.pib || '',
                    compName: user.compName || '',
                    compAddr: user.compAddr || '',
                    compCity: user.compCity || '',
                    compStreetHome:user.compStreetHome || '',
                    compMunicipal: user.compMunicipal || '',
                    compRegNum: user.compRegNum || '',
                    compRegDate: user.compRegDate || '',
                    rd1: user.rd1 || '',
                    rd2: user.rd2 || '',
                    rd3: user.rd3 || '',
                    rd4: user.rd4 || '',
                    rd5: user.rd5 || '',
                    rd6: user.rd6 || '',
                    rd7: user.rd7 || '',
                    rd8: user.rd8 || '',
                    compBillNum: user.compBillNum || '',
                    famName1: user.famName1 || '',
                    famPassNum1: user.famPassNum1 || '',
                    famMember1: user.famMember1 || '',
                    famJmbgNum1: user.famJmbgNum1 || '',
                    f11: user.f11 || '',
                    f12: user.f12 || '',
                    f13: user.f13 || '',
                    f14: user.f14 || '',
                    f15: user.f15 || '',
                    f16: user.f16 || '',
                    f17: user.f17 || '',
                    f18: user.f18 || '',
                    f19: user.f19 || '',
                    f110: user.f110 || '',
                    f111: user.f111 || '',
                    f112: user.f112 || '',
                    f113: user.f113 || '',
                    famName2: user.famName2 || '',
                    famPassNum2: user.famPassNum2 || '',
                    famMember2: user.famMember2 || '',
                    famJmbgNum2: user.famJmbgNum2 || '',
                    f21: user.f21 || '',
                    f22: user.f22 || '',
                    f23: user.f23 || '',
                    f24: user.f24 || '',
                    f25: user.f25 || '',
                    f26: user.f26 || '',
                    f27: user.f27 || '',
                    f28: user.f28 || '',
                    f29: user.f29 || '',
                    f210: user.f120 || '',
                    f211: user.f121 || '',
                    f212: user.f122 || '',
                    f213: user.f123 || '',
                    famName3: user.famName3 || '',
                    famPassNum3: user.famPassNum3 || '',
                    famMember3: user.famMember3 || '',
                    famJmbgNum3: user.famJmbgNum3 || '',
                    f31: user.f31 || '',
                    f32: user.f32 || '',
                    f33: user.f33 || '',
                    f34: user.f34 || '',
                    f35: user.f35 || '',
                    f36: user.f36 || '',
                    f37: user.f37 || '',
                    f38: user.f38 || '',
                    f39: user.f39 || '',
                    f310: user.f310 || '',
                    f311: user.f311 || '',
                    f312: user.f312 || '',
                    f313: user.f313 || '',
                    famName4: user.famName4 || '',
                    famPassNum4: user.famPassNum4 || '',
                    famMember4: user.famMember4 || '',
                    famJmbgNum4: user.famJmbgNum4 || '',
                    f41: user.f41 || '',
                    f42: user.f42 || '',
                    f43: user.f43 || '',
                    f44: user.f44 || '',
                    f45: user.f45 || '',
                    f46: user.f46 || '',
                    f47: user.f47 || '',
                    f48: user.f48 || '',
                    f49: user.f49 || '',
                    f410: user.f410 || '',
                    f411: user.f411 || '',
                    f412: user.f412 || '',
                    f413: user.f413 || '',
                    famName5: user.famName5 || '',
                    famPassNum5: user.famPassNum5 || '',
                    famMember5: user.famMember5 || '',
                    famJmbgNum5: user.famJmbgNum5 || '',
                    f51: user.f51 || '',
                    f52: user.f52 || '',
                    f53: user.f53 || '',
                    f54: user.f54 || '',
                    f55: user.f55 || '',
                    f56: user.f56 || '',
                    f57: user.f57 || '',
                    f58: user.f58 || '',
                    f59: user.f59 || '',
                    f510: user.f510 || '',
                    f511: user.f511 || '',
                    f512: user.f512 || '',
                    f513: user.f513 || '',
                    currDate: user.currDate || '',
                    termDate: user.termDate || '',
                    month: user.month || '',
                    billNum:user.billNum || '',
                    f11_3: user.f11_3 || '',
                    f21_3: user.f12_3 || '',
                    f31_3: user.f13_3 || '',
                    f41_3: user.f14_3 || '',
                    f51_3: user.f15_3 || '',
                  };

                  onUserSelect(formData); // Передаем данные пользователя в виде FormData
                }}
              >
                Выбрать пользователя
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};
