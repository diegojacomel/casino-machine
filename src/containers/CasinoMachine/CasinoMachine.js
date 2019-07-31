// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import CasinoMachineRow from '../CasinoMachineRow/CasinoMachineRow';

const Machine = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
`

const MachineWrapper = styled('div')`
    display: flex;
`

const MachineButtons = styled('div')`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 640px;
`

const PrizeAmount = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-size: 40px;
`

function CasinoMachine() {
    return (
        <Machine>
            <MachineWrapper>
                <CasinoMachineRow />
                <CasinoMachineRow />
                <CasinoMachineRow />
            </MachineWrapper>
            <MachineButtons>
                <button>
                    Start
                </button>
                <button>
                    Stop
                </button>
            </MachineButtons>
            <PrizeAmount>
                Prize amount: $50
            </PrizeAmount>
        </Machine>
    );
}

export default CasinoMachine;
