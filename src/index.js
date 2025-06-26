// ✅ Import i18n first, before any other component
import './i18n'; // Must come before App

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Wrap App with Suspense for translation loading
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading translations...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
