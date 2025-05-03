import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/top-page/Reset.css';
import TopPage from './pages/TopPage.jsx';
import ReservationForm from './pages/ReservationForm.jsx';
import CustomerInfo from './pages/CustomerInfo.jsx';
import Confirmation from './pages/Confirmation.jsx'; 
import ThankYou from './pages/ThankYou.jsx';
import { useState } from 'react';
import OnsenPage from './pages/OnsenPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // 経路変更時に実行

  return null;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/reserved" element={<ReservationForm />} />
        <Route path="/customer-info" element={<CustomerInfo />} />
        <Route path="/confirmation" element={<Confirmation />} /> 
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path='/onsen-page' element={<OnsenPage />} />
      </Routes>
    </Router>
  );
}

export default App;