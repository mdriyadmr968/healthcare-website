import React from 'react';

import Services from '../Services/Services';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
