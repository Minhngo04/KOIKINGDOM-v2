import React from 'react';
import { Outlet } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Header from './Component/User/Header';
// import './App.scss';
import Footer from './Component/User/Footer';
function App() {
  return (
    <div>
      <Header />
      {/* <PerfectScrollbar> */}
      <Outlet />
      {/* </PerfectScrollbar> */}
      <Footer />
    </div>
  );
}

export default App;
