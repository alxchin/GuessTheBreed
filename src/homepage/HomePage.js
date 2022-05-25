import React from 'react'

import { Container, Main, Button } from './styles'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
    return (
        <Container>
            <Main>
                <NavLink to="/dog" >
                    <Button> Guess The Dog Breed </Button>
                </NavLink>
            </Main>

        </Container>
    )
}

export default HomePage