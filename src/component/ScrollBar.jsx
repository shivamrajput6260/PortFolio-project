import React from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";
import "./ScrollBarPage.css"
// import { animateScroll } from "react-scroll";
import { animateScroll } from 'react-scroll';

const ScrollBar = () => {
  const scrollTopHandler = () => {
    animateScroll.scrollToTop();
  };
  return (
    <>

      <IoIosArrowDropupCircle className='scroll-btn'
        onClick={scrollTopHandler} />
    </>
  );
}

export default ScrollBar