import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/scss/style.scss';

import {
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';
import Home from './pages/Home';
import About from './pages/About';
import UserTemplate from './templates/user/UserTemplate';
import { store } from './redux/configStore';
import Detail from './pages/Detail';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<UserTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="detail" element={<Detail />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
