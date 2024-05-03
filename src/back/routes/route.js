 import { initializeApp } from 'firebase/app';
 import { getAnalytics } from 'firebase/analytics';
 import { getAuth } from 'firebase/auth';
 import LoginForm from '../../front/login';
 import Apresentacao from '../../front/apresentacao';
 import Home from '../../front/home';
 import Recuperacao from '../../front/recuperação';
 import Suporte from '../../front/suporte';
 import tutorial from '../../front/tutorial';
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Tutorial from '../../front/tutorial';
 import Profile from '../../front/profile';
 import Relatorios from '../../front/relatorios';
 import Cadastro from '../../front/cadastro';

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
         <Route path="/" element={<Apresentacao />} />
         <Route path="/login" element={<LoginForm />} />
         <Route path="/home" element={<Home />} />
         <Route path="/recuperacao" element={<Recuperacao />} />
         <Route path="/tutorial" element={<Tutorial />} />
         <Route path="/suporte" element={<Suporte />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/relatorios" element={<Relatorios />} />
         <Route path="/cadastro" element={<Cadastro />} />
       </Routes>
     </BrowserRouter>
   );
 }

 export default AppRoute;
