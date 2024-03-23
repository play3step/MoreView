import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProjectPage from './pages/ProjectPage';
// import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

import './App.css';
import MyPage from './pages/MyPage';
import LoadingModal from './components/ProjectPage/LoadingModal';
import SideMenu from './components/SideMenu';
import ItemPage from './pages/ItemPage';
import EditPage from './pages/EditPage';

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
          <Routes>
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/" element={<MyPage />} />
            <Route path="/About" element={<MyPage />} />
            <Route path="/Edit" element={<EditPage />} />
            <Route path="/Projects" element={<ItemPage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
