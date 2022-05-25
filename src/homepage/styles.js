import styled from "styled-components"


export const Container = styled.div`
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.div`
width: 40vw;
height: 70vh;
z-index: 3;
border: 2px solid #df7ea8;

display: flex;
justify-content: center;
align-items: center;
position: absolute;
`

export const Button = styled.button`
width: 15vw;
height: 10vh; 
border: 2px solid red;
background-color: transparent;
cursor: pointer;


`