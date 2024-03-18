import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProjectPage from './pages/ProjectPage';
// import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

import './App.css';
import MyPage from './pages/MyPage';
import LoadingModal from './components/ProjectPage/LoadingModal';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
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
