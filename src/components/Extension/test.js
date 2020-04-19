import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container
} from 'reactstrap';

import Information from './Information';
import Information1 from './Inormation1';
import Information2 from './Information2';
import Information3 from './Information3';
import {BrowserRouter , Route } from 'react-router-dom';


const items = [
  {
    
    tag: Information,
   
  },
  {
    
    tag: Information1,
   
  },
  {
    
    tag: Information2,
   
  },
  {
    
    tag: Information3,
   
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
      
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.tag}>
        <BrowserRouter>
        <Route component={item.tag}></Route>
        </BrowserRouter>
    
      </CarouselItem>
    );
  });

  return (
    <Container>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </Container>
  );
}

export default Example;