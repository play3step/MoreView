import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/LoginPage';

import './App.css';
import MyPage from './pages/MyPage';

import SideMenu from './components/Menu/SideMenu';
import ItemPage from './pages/ItemPage';
import EditPage from './pages/EditPage';
import LoadingModal from './components/Modal/LoadingModal';
import CreateObjectModal from './components/Modal/CreateObjectModal';
import SearchObjectModal from './components/Modal/SearchObjectModal';
import ControllerObjectModal from './components/Modal/ControllerObjectModal';
import CreateProjectModal from './components/Modal/CreateProjectModal';
import FriendsPage from './pages/FriendsPage';
import NewTechPage from './pages/NewTechPage';
import HeaderMenu from './components/Menu/HeaderMenu';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <RecoilRoot>
        <BrowserRouter>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '14.47916vw',
              height: '100%',
            }}
          >
            <header>
              <HeaderMenu />
            </header>
            <aside style={{ flex: 1 }}>
              <SideMenu />
            </aside>
          </div>
          <LoadingModal />
          <CreateProjectModal />
          <CreateObjectModal />
          <SearchObjectModal />
          <ControllerObjectModal />
          <main
            style={{
              flex: 1,
              paddingTop: ' 7.77vh',
            }}
          >
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/Home" element={<MyPage />} />
              <Route path="/Edit/:EditId" element={<EditPage />} />
              <Route path="/Projects" element={<ItemPage />} />
              <Route path="/Friends" element={<FriendsPage />} />
              <Route path="/NewTech" element={<NewTechPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
