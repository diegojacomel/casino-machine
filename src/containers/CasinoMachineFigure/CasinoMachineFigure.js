// Modules
import React from 'react';
import styled from 'styled-components';

const Figure = styled('figure')`
${() => `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    padding: 15px;
    box-sizing: border-box;
    background: #ffffff;
    height: 200px;
    width: 200px;
`}`

const FigureImage = styled('img')`
    max-width: 100%;
    max-height: 180px;
`

function CasinoMachineFigure({ src, alt }) {
    return (
        <Figure>
            <FigureImage src={src} alt={alt} />
        </Figure>
    );
}

export default CasinoMachineFigure;
