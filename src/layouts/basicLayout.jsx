import React from 'react';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import Auth from '../components/common/auth/Auth';

export default function basicLayout(component) {
  return (
    <Auth>
      <div className="page-layout">
        <Header />
        <main className="page-layout">{component}</main>
        <Footer />
      </div>
    </Auth>
  );
}
