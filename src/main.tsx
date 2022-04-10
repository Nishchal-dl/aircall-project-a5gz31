import { Tractor } from '@aircall/tractor';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CallDetail } from './container/CallDetailContainer';
import { CallsPageContainer } from './container/CallsPageContainer';
import { LoginPage } from './container/LoginPageContainer';

import './index.css';

render(
  <React.StrictMode>
    <Tractor injectStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/calls" element={<CallsPageContainer />} >
            <Route path="/calls/:id" element={<CallDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Tractor>
  </React.StrictMode>,
  document.getElementById('root')
);
