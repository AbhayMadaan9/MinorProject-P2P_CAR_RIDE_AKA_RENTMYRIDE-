
import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarIcon from '@mui/icons-material/Star';
// import StarHalfIcon from '@mui/icons-material/StarHalf';


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
`
const Heading = styled.div`
font-size: xx-large;
letter-spacing: 1px;
font-weight: 550;
font-family: 'Oswald', sans-serif;
cursor: pointer;
word-spacing: 2px;
`
const Detail = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 16px;
width: 600px;
text-align: center;
`
const Img = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
`
const P = styled.p`
font-size: large;
font-weight: 600;
`
const Span = styled.span`
font-weight: 300;   
`
export default function HappyCustomers() {
    const name = "Mansur"
    const pic = "https://th.bing.com/th/id/OIP.Wx0o53Tu9iNVCPE_boHMpQHaHa?pid=ImgDet&rs=1"
    const review = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at veritatis repellendus odit temporibus accusamus natus, nemo ad laboriosam autem asperiores numquam veniam iusto magni quidem laborum sit aspernatur optio?"
  return (
    <>
    <Main>
        <Heading>Our Happy Customer</Heading>
        <Carousel indicators={false}> 
      <Carousel.Item>
        <Detail>
            <Img src={pic}/>
            <P>{name}</P>
            <Span>{review}</Span>
        </Detail>
      </Carousel.Item>
      <Carousel.Item>
      <Detail>
            <Img src={pic}/>
            <P>{name}</P>
            <Span>{review}</Span>
        </Detail>
      </Carousel.Item>
      <Carousel.Item>
      <Detail>
            <Img src={pic}/>
            <P>{name}</P>
            <Span>{review}</Span>
        </Detail>

      </Carousel.Item>
    </Carousel>
    </Main>
    </>
  )
}
