import React from 'react';
import { Carousel } from 'antd';
import add1 from '../../assets/1.png';
import add2 from '../../assets/2.png';
import add3 from '../../assets/3.png';
import add4 from '../../assets/4.png';
import add5 from '../../assets/5.png';

const CarouselSection = () => (
  <div className="carousel-section" style={{ width: '100%', marginTop: '32px' }}>
    <Carousel autoplay dots infinite style={{ width: '100%' }}>
      <div><img src={add1} alt="Ad 1" style={{ width: '100%', borderRadius: '12px' }} /></div>
      <div><img src={add2} alt="Ad 2" style={{ width: '100%', borderRadius: '12px' }} /></div>
      <div><img src={add3} alt="Ad 3" style={{ width: '100%', borderRadius: '12px' }} /></div>
      <div><img src={add4} alt="Ad 4" style={{ width: '100%', borderRadius: '12px' }} /></div>
      <div><img src={add5} alt="Ad 5" style={{ width: '100%', borderRadius: '12px' }} /></div>
    </Carousel>
  </div>
);

export default CarouselSection;
