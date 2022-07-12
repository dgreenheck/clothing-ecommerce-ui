import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenView from './routes/men';
import WomenView from './routes/women';
import AboutUsView from './routes/about-us';
import ContactView from './routes/contact';
import HomeView from './routes/home';
import ShoppingCartView from './routes/shopping-cart';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<App />}>
          <Route index element={<HomeView />}/>
          <Route path = "men" element={<MenView />} />
          <Route path = "women" element={<WomenView />} />
          <Route path = "about-us" element={<AboutUsView />} />
          <Route path = "contact" element={<ContactView />} />
          <Route path = "shopping-cart" element={<ShoppingCartView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
