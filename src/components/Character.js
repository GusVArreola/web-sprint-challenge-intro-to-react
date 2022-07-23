// Write your Character component here
import react from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
width: 45%;
margin: 0 auto;
border: 1px solid;
padding: 1%;
background-color: #1b1b1b;
`

const NamesStyles = styled.div`
display: inline;
border: 2 px solid black;
color: black;
font-size: 1.5rem;
margin:3%;
`

const NamesStyles2 = styled.div`
display: inline;
justify-content: flex-end;
border: 1 px solid black;
color: red;
font-size: 1.2rem;
margin:2%;
border: 1px solid black;
padding: 1%;
background-color: olive;
border-radius: 40px;
color: white;
`

const Div = styled.div`
display:flex;
justify-content: space-between;
border: 2.5px solid green;
background-color: white;
height: 5vh;
margin-top: 1.5%;
`

const Character = props => {
    return(
       <StyledDiv>
        <Div>
        <NamesStyles>{props.people}</NamesStyles><NamesStyles2>{props.date}</NamesStyles2>
         </Div>
       </StyledDiv>
    )
}

export default Character