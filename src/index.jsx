import React, { Suspense } from 'react';

import './i18next/i18next';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './app/store';
import App from './App';
import './index.css';
// eslint-disable-next-line
import 'swiper/css/bundle';
// eslint-disable-next-line import/no-unresolved

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Suspense>
);
