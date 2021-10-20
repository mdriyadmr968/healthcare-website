import React from 'react';

import { Row } from 'react-bootstrap';

import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header';

const About = () => {
  return (
    <div>
      <Header></Header>
      <Row>
        <h4>
          The National Institutes of Health (NIH) is the largest source of
          medical research funding in the world and to compliment its operations
          it boasts one of the internet’s most popular healthcare websites.
          Estimates suggest nih.gov receives on average a staggering 20 million
          unique visitors every month, with over 40 percent of those visits
          coming from the US. According to Alexa and its three-month traffic
          rankings, the popularity of the NIH website is ranked as #161 in the
          US and #354 on a global scale. Alexa data also reveals that visitors
          typically stay on the site for about four minutes. The website
          features a range of content, from everyday health information to
          details of its grants and funding and training and research
          programmes. It’s health information is mainly categorised by age
          groups gender; Child & Teen Health, Men’s Health, Women’s Health,
          Minority Health and Seniors’ Health.
        </h4>
      </Row>
      <Footer></Footer>
    </div>
  );
};

export default About;
