import { Tractor } from '@aircall/tractor';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CallsPage } from './CallsPage';

import './index.css';
import Login from './Login';

render(
  <React.StrictMode>
    <Tractor injectStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/calls" element={<CallsPage />} />
        </Routes>
      </BrowserRouter>
    </Tractor>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Tractor injectStyle>
//       <App />
//     </Tractor>
//   </React.StrictMode>
// );
