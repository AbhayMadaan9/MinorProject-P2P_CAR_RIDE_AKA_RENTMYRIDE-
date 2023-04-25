import React from 'react'
import styled from 'styled-components'
import { AccountCircle} from '@mui/icons-material'
import StarIcon from '@mui/icons-material/Star';

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
gap: 12px;
padding: 24px;
background-color: cadetblue;
width: fit-content;
border-radius: 12px;
`
const Text = styled.p`
font-size: medium;
font-weight: 500;
`
const Span = styled.div`
font-size: medium;
font-weight: 100;
`
const Sec = styled.div`
display: flex;
flex-direction: row;
align-items: left;
justify-content: center;
gap: 8px;
`

export default function ReviewCard() {
    return (
        <>
            <Main>
                <Sec>
                    <AccountCircle fontSize='large' />
                    <Text>Reviewer name</Text>
                </Sec>
                <Sec>
                    <StarIcon sx={{color: "gold"}}/>
                    <StarIcon sx={{color: "gold"}}/>
                    <StarIcon sx={{color: "gold"}}/>
                    <StarIcon sx={{color: "gold"}}/>
                    <StarIcon sx={{color: "gold"}}/>
                </Sec>
                <Text>Review</Text>
                <Span>x long ago</Span>
            </Main>
        </>
    )
}
