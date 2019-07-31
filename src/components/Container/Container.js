// Modules
import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled('section')`
    padding: 0 15px;
`

function Container({ children }) {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    );
}

export default Container;
