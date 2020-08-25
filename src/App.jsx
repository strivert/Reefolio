import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyProfile from './pages/app/MyProfile';
import MyProfileEmpty from './pages/app/MyProfileEmpty';
import ViewProfile from './pages/app/ViewProfile';
import SiteWrapper from './pages/SiteWrapper';
import ContentsWrapper from './pages/ContentsWrapper';

function App() {
  return (
    <SiteWrapper>
      <ContentsWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/MyProfileEmpty" element={<MyProfileEmpty />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/ViewProfile" element={<ViewProfile />} />
          </Routes>
        </Router>
      </ContentsWrapper>
    </SiteWrapper>
  );
}

export default App;
