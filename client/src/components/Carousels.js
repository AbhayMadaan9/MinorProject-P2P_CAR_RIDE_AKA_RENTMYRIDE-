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
          src="https://th.bing.com/th/id/R.5d34ed427ed39d4829b7fd3aaa35ce6b?rik=BCNeyirkEKdlSg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fP7imYzR.jpg&ehk=9rwcHHw9cbC%2bhgtmnbPlIQ6IAUD25EWOBmZE%2f3xwoBI%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
          height="588px"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.81f4166e3a14d2fc55308c3a79b96679?rik=rIbN4hKiYHic4Q&riu=http%3a%2f%2fgtspiritmedia.com%2fgtspirit%2fuploads%2f2014%2f09%2fthis-mercedes-benz-sl-r230-wide-body-kit-comes-from-poland_5-696x385.jpg&ehk=G7tbTZns7RzQLjhe8bfof%2beqAj1dzKdff%2fe%2f5avXMy4%3d&risl=&pid=ImgRaw&r=0"
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
