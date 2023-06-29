import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useContext } from "react";
import { UserContext } from "../App";

const CarouselContainer = styled.div`
  width: 70%;
  height: auto;
  margin: auto;
  position: relative;
  z-index: -1;
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
  :hover{
    cursor: pointer;
  }
`;


export default function CarImages(){
    const [activeIndex, setActiveIndex] = useState(0);
    const {availableCars} = useContext(UserContext)

    const images = [
        "https://th.bing.com/th/id/R.d69e50d41e8c41af204d60a7ebf64e6e?rik=11eaj38wHdxXRQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-T_u7AixkhT8%2fTuXA0QKoMpI%2fAAAAAAAAFas%2fBDrVxQK_BLs%2fs1920%2fAudi-cars-wallpaper.JPG&ehk=QjY4VlAHaeE0Nmg%2f%2f1Mx%2fSqTB2zkCRAnswcForbGtZo%3d&risl=&pid=ImgRaw&r=0",
        'https://th.bing.com/th/id/R.d69e50d41e8c41af204d60a7ebf64e6e?rik=11eaj38wHdxXRQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-T_u7AixkhT8%2fTuXA0QKoMpI%2fAAAAAAAAFas%2fBDrVxQK_BLs%2fs1920%2fAudi-cars-wallpaper.JPG&ehk=QjY4VlAHaeE0Nmg%2f%2f1Mx%2fSqTB2zkCRAnswcForbGtZo%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.101768c0fe898751fa637550b61181a0?rik=6ek4%2fVWG%2fpWLxg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-4uE0QgWOuIQ%2fUXWWx_dELHI%2fAAAAAAAAAGA%2fEFdi33z93JU%2fs1600%2faventador-lamborghini-LP%2b700.jpg&ehk=4%2fqSZdKiovImlccKuPwWtTJCezsJ%2bg7I2XqmQhmNmf0%3d&risl=&pid=ImgRaw&r=0',
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

