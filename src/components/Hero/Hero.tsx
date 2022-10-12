import React, { FC } from "react";
import HeroSlider, { Slide, Overlay, Nav } from "hero-slider";
import { Title, Wrapper } from "../ui";
import room1 from '../../assets/images/room1.jpeg'
import room2 from '../../assets/images/room2.jpg'
import room3 from '../../assets/images/room3.jpg'
import room4 from '../../assets/images/room4.jpg'
import Cover from "./Cover";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const sliderData: any = [
  {
    id: 1, img: room1
  },
  {
    id: 2, img: room2
  },
  {
    id: 3, img: room3
  },
  {
    id: 3, img: room4
  }
]


const Hero: FC = () => {
  return (
    <HeroSlider
      height="80vh"
      autoplay
      controller={{
        slidingDuration: 250,
        slidingDelay: 100,
        initialSlide: 1,
        onSliding: (nextSlide: number) =>
          console.debug('onSliding(nextSlide): ', nextSlide),
        onBeforeSliding: (previousSlide: number, nextSlide: number) =>
          console.debug(
            'onBeforeSliding(previousSlide, nextSlide): ',
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide: number) =>
          console.debug('onAfterSliding(nextSlide): ', nextSlide)
      }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
    >
      <Overlay>
        {/* <Wrapper>
          <Title>Basic Slider</Title>
        </Wrapper> */}
        <Cover>
          <Banner
            title="Explore rooms with us"
          >
            <Link to="/rooms" className="btn-primary">Our rooms</Link>
          </Banner>
        </Cover>
      </Overlay>

      {
        sliderData.map((image: any) => (
          <Slide key={image.id}
            background={{
              backgroundImageSrc: `${image.img}`,
            }}
          />
        ))
      }

      <Nav />
    </HeroSlider>
  );
}

export default Hero;