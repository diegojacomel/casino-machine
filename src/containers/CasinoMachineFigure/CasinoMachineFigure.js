// Modules
import React from 'react';
import styled from 'styled-components';

const Figure = styled('figure')`
${({ spinning }) => `
    margin: 0;
    width: 200px;
    transform: ${spinning ? spinning : 'translate(0, 0)'};
`}`

const FigureImage = styled('img')`
    max-width: 100%;
`

function CasinoMachineFigure({ src, alt, spinning }) {
    return (
        <Figure spinning={spinning}>
            <FigureImage src={src} alt={alt} />
        </Figure>
    );
}

export default CasinoMachineFigure;
