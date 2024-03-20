import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProjectPage from './pages/ProjectPage';
// import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

import './App.css';
import MyPage from './pages/MyPage';
import LoadingModal from './components/ProjectPage/LoadingModal';
import SideMenu from './components/myPage/SideMenu';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <SideMenu />
        <LoadingModal />
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/" element={<MyPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
