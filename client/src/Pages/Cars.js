import React from 'react'
import styled from 'styled-components'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CarCard from '../components/CarCard';
import cars from '../SampleCars';


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`
const Nav = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 12px;
background-color: #D8EADD;
box-shadow: -1px 9px 8px -1px rgba(0,0,0,0.66);
-webkit-box-shadow: -1px 9px 8px -1px rgba(0,0,0,0.66);
-moz-box-shadow: -1px 9px 8px -1px rgba(0,0,0,0.66);
/* box-shadow: 0px 0px 8px 1px black; */
background-color: white;
`
const First = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`
const Left = styled.div`
margin-left: 18px;
`
const Right = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 18px;
margin-right: 18px;
`
const Account = styled.div`
font-size: x-large;
font-weight: 500;
`
const Second = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`
const ModifySearch = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
gap: 8px;
margin-left: 18px;
`
const Searching = styled.div``
const Type = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
margin-right: 18px;
`
const Name = styled.div`
font-weight: 300;
`
const TypeSec = styled.div`
padding: 16px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
background-color: #D8EADD;
border-radius: 16px;
`
const TypeHeading = styled.div`
cursor: pointer;
padding: 2px;
&:hover{
  background-color: white;
border-radius: 5px;
}
`

const Third = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #D8EADD;
  padding: 20px;
  width: 100%;
  /* z-index: -1; */
`

const Filters = styled.div`
  width: 300px;
  background-color: white;
`
const Filtermain = styled.div` 
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
gap: 8px;
padding: 24px;
margin-left: 1rem;
`
const FilterHeading = styled.div`
font-size: large;
font-weight: 500;
`
const FilterName = styled.div``
const Vehicles = styled.div`
flex: 1;
background-color: #D8EADD;
display: flex;
flex-direction: row;
align-items: left;
justify-content: center;
flex-wrap: wrap;
`
const Logo = styled.img`
width: 200px;
height: 70px;
object-fit: cover;
`


export default function Cars() {
  return (
    <>
    <Main>
      <Nav>
      <First>
        <Left>
        <Logo src="./logo.jpg" alt="logo" />
        </Left>
        <Right>
        <Link to="/faqs" style={{textDecoration: "none", fontsize: "large", color: "black"}}><h4>FAQs</h4></Link>
        <Link to="/profile" style={{textDecoration: "none", fontsize: "large", color: "black"}}>
        <Account><AccountCircleIcon fontSize='large'/> User</Account>
        </Link>
        </Right>
      </First>
      <hr />
      <Second>
        <ModifySearch>
          <Name>Modify search</Name>
          <Searching>
          <TextField
            label="Location"
          />
          <TextField
            label="start time"
          />
           <TextField
            label="End time"
          />
          </Searching>
     
        </ModifySearch>
        <Type>
          <Name>Type</Name>
          <TypeSec>
            <TypeHeading><h5>Electric</h5></TypeHeading>
            <TypeHeading><h5>Diseal</h5></TypeHeading>
            <TypeHeading><h5>Petrol</h5></TypeHeading>
          </TypeSec>
        </Type>
      </Second>
      </Nav>
      <Third>
        <Filters>
          <Filtermain>
          <FilterHeading>Filter</FilterHeading>
          <FilterHeading>Brand</FilterHeading>
          <FilterName>
          <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Maruti" />
      <FormControlLabel control={<Checkbox />} label="Mercedes" />
      <FormControlLabel control={<Checkbox />} label="Hundayi" />
      <FormControlLabel control={<Checkbox />} label="BMW" />
      <FormControlLabel control={<Checkbox />} label="Audi" />
    </FormGroup>
          </FilterName>
          <FilterHeading>Transmission type</FilterHeading>
          <FilterName>
          <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Manual" />
      <FormControlLabel control={<Checkbox />} label="Automatic" />
    </FormGroup>
          </FilterName>
          <FilterHeading>Seat Capacity</FilterHeading>
          <FilterName>
          <FormGroup>
      <FormControlLabel control={<Checkbox />} label="5 capacity" />
      <FormControlLabel control={<Checkbox />} label="7 capacity" />
    </FormGroup>
          </FilterName>
          <FilterHeading>Sort by Price</FilterHeading>
          <FilterName>
          <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Low to High" />
      <FormControlLabel control={<Checkbox />} label="High to Low" />
    </FormGroup>
          </FilterName>
          </Filtermain>
        </Filters>
        <Vehicles>
        {cars.map(ite=>(
               <CarCard car={ite}/>
            )  
            )}
        </Vehicles>
      </Third>
      
    </Main>
    </>
  )
}
