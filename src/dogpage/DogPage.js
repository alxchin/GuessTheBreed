import React, { useEffect, useState } from 'react'
import $ from "jquery";
import { Container, Main, PointContainer, PointCounter, PointWord, DogContainer, QuestionContainer, ImageContainer, AnswerContainer, Button } from './styles'
import { dogBreedData } from '../data/data'

const DogPage = (props) => {

    const [dogBreed, setDogBreed] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [pointCount, setPointCount] = useState(0);

    var staticURL = ('https://dog.ceo/api/breeds/image/random');

    useEffect(() => {
        $.getJSON(staticURL, function (data) {
            if (loaded === false) {
                setDogBreed(data);
                setLoaded(true);
            }
        });
    }, [])

    function GetBreed() {
        if (loaded === true) {
            const CorrectAnswer = dogBreed.message.slice(30).split('/')[0].split('-')[0]
            return CorrectAnswer
        }
    }
    console.log(GetBreed())

    let AnswerArray = []
    function RandomOrderAnswer() {
        let CorrectAnswer = [GetBreed()]
        const keys = Object.keys(dogBreedData[0].message);
        for (let i = 0; AnswerArray.length < 4; i++) {
            const randIndex = Math.floor(Math.random() * keys.length);
            const randKey = keys[randIndex];
            AnswerArray.push(randKey)
            if (AnswerArray.length === 3) {
                AnswerArray.splice(Math.floor(Math.random() * (AnswerArray.length + 1)), 0, CorrectAnswer.pop());
                AnswerArray = [...new Set(AnswerArray)];
                continue
            } else {
                continue;
            }
        }
        return (AnswerArray)
    }

    function NextDog() {
        $.getJSON(staticURL, function (data) {
            setDogBreed(data);
        });
    }

    function HandleClick(d) {
        if (d === GetBreed()) {
            setPointCount(pointCount + 1);
            NextDog()

        } else {
            console.log('correctBreed is empty')
        }
    }

    return (
        <Container>
            <Main>
                <PointContainer>
                    <PointCounter> {pointCount}</PointCounter>
                    <PointWord> Points</PointWord>
                </PointContainer>
                <DogContainer>
                    <QuestionContainer> Which dog breed is this? </QuestionContainer>
                    <ImageContainer src={dogBreed.message}></ImageContainer>
                </DogContainer>
                <AnswerContainer>
                    {
                        RandomOrderAnswer().map(d =>
                            <Button onClick={() => HandleClick(d)}> {d} </Button>
                        )
                    }
                </AnswerContainer>
            </Main>
        </Container>

    )
}

export default DogPage