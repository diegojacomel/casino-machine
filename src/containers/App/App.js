// Modules
import React from 'react';
import styled from 'styled-components';

//Containers
import CasinoMachine from '../CasinoMachine/CasinoMachine';

// Components
import Container from '../../components/Container/Container'

// Styles
import './App.css';

const AppWrapper = styled('main')``

function App() {
    return (
        <AppWrapper>
            <Container>
                <CasinoMachine />
            </Container>
        </AppWrapper>
    );
}

export default App;
