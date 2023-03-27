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
          src="democar2.jpg"
          alt="First slide"
          height="669px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src="./democar1.jpg"
          alt="Second slide"
          height="700px"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src="./democar.jpg"
          alt="Third slide"
          height="700px"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
