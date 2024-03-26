import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import LoginForm from '../../front/login';
import Apresentacao from '../../front/apresentacao';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyAxdPHSnBVV5idYyM7bQ94kfi7SVufqVtc",
  authDomain: "smart-43b09.firebaseapp.com",
  projectId: "smart-43b09",
  storageBucket: "smart-43b09.appspot.com",
  messagingSenderId: "792178265446",
  appId: "1:792178265446:web:f365a5ef136f2eb9254ca7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/apresentacao" element={<Apresentacao/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
