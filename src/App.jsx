import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/LoginPage';

import './App.css';
import HomePage from './pages/HomePage';

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
import MeshObjectModal from './components/Modal/MeshObjectModal';
import ShareModal from './components/Modal/ShareModal';
import InviteFriendModal from './components/Modal/InviteFriendModal';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </RecoilRoot>
  );
}

function MainContent() {
  const location = useLocation();
  const isPage =
    location.pathname.startsWith('/Edit') || location.pathname === '/';

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {!isPage && (
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
      )}
      <main style={{ flex: 1, paddingTop: !isPage ? '7.77vh' : '0' }}>
        <LoadingModal />
        <CreateProjectModal />
        <CreateObjectModal />
        <SearchObjectModal />
        <MeshObjectModal />
        <InviteFriendModal />
        <ShareModal />
        <ControllerObjectModal />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Edit/:code" element={<EditPage />} />
          <Route path="/Projects" element={<ItemPage />} />
          <Route path="/Friends" element={<FriendsPage />} />
          <Route path="/NewTech" element={<NewTechPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
