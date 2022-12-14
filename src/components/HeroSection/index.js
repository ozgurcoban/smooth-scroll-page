import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import Video from '../../video/video.mp4';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = e => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        {/* // FIXME: video not autoplaying on production */}
        <VideoBg autoPlay={true} loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Uppsalas Elfte Nation</HeroH1>
        <HeroP>
          Träffpunkten i Uppsala med skön stämning, god pizza och givetvis bira
          och bärs
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
