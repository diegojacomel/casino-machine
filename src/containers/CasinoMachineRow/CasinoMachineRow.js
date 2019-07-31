// Modules
import React from 'react';
import styled from 'styled-components';

// Containers
import CasinoMachineFigure from '../CasinoMachineFigure/CasinoMachineFigure';

// Images
import images from '../../images';

const Row = styled('div')`
    margin: 0 10px;
    background: #ffffff;
    max-height: 200px;
    overflow: hidden;
`

function CasinoMachineRow() {
    return (
        <Row>
            <CasinoMachineFigure src={images.monkey} alt="Casino machine image" />
            <CasinoMachineFigure src={images.monkey} alt="Casino machine image" />
            <CasinoMachineFigure src={images.monkey} alt="Casino machine image" />
            <CasinoMachineFigure src={images.monkey} alt="Casino machine image" />
        </Row>
    );
}

export default CasinoMachineRow;
