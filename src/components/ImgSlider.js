import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../resources/images/slider-badging.jpg";
import Img2 from "../resources/images/slider-badag.jpg";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carosel {...settings}>
      <Wrap>
        <img src={Img1} alt="" />
      </Wrap>
      <Wrap>
        <img src={Img2} alt="" />
      </Wrap>
      <Wrap>
        <img src={Img1} alt="" />
      </Wrap>
    </Carosel>
  );
}

export default ImgSlider;

const Carosel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
