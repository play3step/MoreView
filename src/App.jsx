import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProjectPage from './pages/ProjectPage';
// import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

import './App.css';
import MyPage from './pages/MyPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
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
