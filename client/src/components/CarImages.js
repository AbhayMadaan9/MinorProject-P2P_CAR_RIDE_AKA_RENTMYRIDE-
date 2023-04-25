

import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const CarouselContainer = styled.div`
  width: 70%;
  height: auto;
  margin: auto;
  position: relative;
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: darkblue; */
`;

const CarouselImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${props => (props.active ? '1' : '0')};
  transition: opacity 1s ease-in-out;
`;

const CarouselButton = styled.button`
  position: absolute;
  /* transform: translateY(-50%); */
  top: 50%;
  background: none;
  border: none;
  color: white;
  font-size: 3em;
  cursor: pointer;
  z-index: 1;
  ${({ direction }) => (direction === 'right' ? 'right: 25px;' : 'left: 25px;')}
`;

const IconStyle = styled.div`
  font-size: 3em;
  color: black;
`;


export default function CarImages(){
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        'https://picsum.photos/seed/picsum/800/400',
        'https://picsum.photos/seed/picsum2/800/400',
        'https://picsum.photos/seed/picsum3/800/400',
    ];

    const nextSlide = () => {
        setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    };

    const prevSlide = () => {
        setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    };

    return (
        <CarouselContainer>
            {images.map((image, index) => (
                <CarouselImage key={index} active={activeIndex === index}>
                    <img src={image} alt="carousel" style={{objectFit: "cover"}} width="100%"/>
                </CarouselImage>
            ))}
            <CarouselButton direction="left" onClick={prevSlide}>
                <IconStyle>
                    <ArrowBackIos />
                </IconStyle>
            </CarouselButton>
            <CarouselButton direction="right" onClick={nextSlide}>
                <IconStyle>
                    <ArrowForwardIos />
                </IconStyle>
            </CarouselButton>
        </CarouselContainer>
    );
};

