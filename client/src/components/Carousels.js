import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components'

const Img = styled.img`
object-fit: cover;
width: 400px;
`
export default function Carousels() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src="./democar.jpg"
          alt="First slide"
          height="588px"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src="./democar.jpg"
          alt="Second slide"
          height="588px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src="./democar.jpg"
          alt="Third slide"
          height="588px"
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}
