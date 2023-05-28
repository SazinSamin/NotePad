import styled from "styled-components";

const TodoStyled = styled.div
`background-image: linear-gradient(to top, ${props => props.backgroundColor});
color: white;
margin: 1vw;
border-radius: 2vw;
padding-left: 5vw;
padding-right: 5vw;
display: flex;
flex-direction: row;
box-shadow:2px 5px 5px blue;`;


export default TodoStyled;