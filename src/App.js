import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Industries from './pages/Industries/Industries';
import Services from './pages/Services/Services';
import YourBusiness from './pages/YourBusiness/YourBusiness';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' >
          <Route index element={<Home/>} />
          <Route path='industries' element={<Industries/>} />
          <Route path='services' element={<Services/>} />
          <Route path='businesses' element={<YourBusiness/>} />
        </Route>
      </Routes>
     <Footer />
    </>
  );
}

export default App;
