import styled from "styled-components"


export const Container = styled.div`
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
background: radial-gradient(circle, rgba(174,238,205,1) 0%, rgba(148,173,233,1) 100%);
display: flex;
justify-content: center;
align-items: center;

`
export const Main = styled.div`
width: 50vw;
height: 80vh;

z-index: 3;
border: 2px solid #df7ea8;
position: absolute;
`

export const PointContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

export const PointCounter = styled.h1`
font-size: 72px;
margin: 0px;
`

export const PointWord = styled.h3`
font-size: 24px;
margin: -5px 0px -5px;
`

export const DogContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`

export const QuestionContainer = styled.h3`
font-size: 23.4px;
margin: 23.4px 0px 10px;
`

export const ImageContainer = styled.img`
display: block;
max-width:450px;
max-height:450px;
width: auto;
height: auto;
margin-left: auto;
margin-right: auto;
text-align: center;
`

export const AnswerContainer = styled.div`
margin: 50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 1em;
`

export const Button = styled.button`
border: none;
background: transparent;
background-color: white;
border-radius: 100px;
outline: none;
font-weight: 800;
height: 60px;
background: ${(props) => props.bg === 'netural' ? 'red' : 'green'}
box-shadow: 0px 10px 20px 0px rgb(0 0 0 / 15%);
cursor: pointer;
`