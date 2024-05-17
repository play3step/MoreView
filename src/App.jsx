import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

import './App.css';
import MyPage from './pages/MyPage';

import SideMenu from './components/myPage/SideMenu';
import ItemPage from './pages/ItemPage';
import EditPage from './pages/EditPage';
import LoadingModal from './components/Modal/LoadingModal';
import CreateObjectModal from './components/Modal/CreateObjectModal';
import SearchObjectModal from './components/Modal/SearchObjectModal';

function App() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <RecoilRoot>
        <BrowserRouter>
          <SideMenu />
          <LoadingModal />
          <CreateObjectModal />
          <SearchObjectModal />
          <Routes>
            <Route path="/" element={<MyPage />} />
            <Route path="/About" element={<MyPage />} />
            <Route path="/Edit/:EditId" element={<EditPage />} />
            <Route path="/Projects" element={<ItemPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
