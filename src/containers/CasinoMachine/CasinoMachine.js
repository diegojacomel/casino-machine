// Modules
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import CasinoMachineFigure from '../CasinoMachineFigure/CasinoMachineFigure';
import images from '../../images';

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

const Button = styled('button')`
${({ color, type }) => `
    border: none;
    background: ${color ? color : '#000000'};
    color: #ffffff;
    font-weight: bold;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    ${type === 'reset'
        ?
        `
        margin-top: 60px;
        `
        :
        ``
    }
`}`

const PrizeAmountValue = styled('strong')`
    margin-left: 10px;
`

const rulesMachine = {
    jackpot: [{
        id: 0,
        name: 'strawberry',
        url: images.strawberry
    }, {
        id: 1,
        name: 'banana',
        url: images.banana
    }, {
        id: 2,
        name: 'orange',
        url: images.orange
    }, {
        id: 3,
        name: 'monkey',
        url: images.monkey
    }],
    timer: 50,
    twoRightSeparated: 10,
    twoRight: 20,
    threeRight: 100,
    didntStart: 5000,
    didntStop: 10000,
    prizeAmount: 0
}

let interval;

let number1 = parseInt(Math.random() * 4);
let number2 = parseInt(Math.random() * 4);
let number3 = parseInt(Math.random() * 4);

function CasinoMachine() {
    const [arrayNumber, setArrayNumber] = useState([]);
    const [total, setTotal] = useState(rulesMachine.prizeAmount);
    const [stopped, setStopped] = useState(false)
    
    const startSpin = () => {    
        interval = setInterval(() => {
            number1 = parseInt(Math.random() * 4);
            number2 = parseInt(Math.random() * 4);
            number3 = parseInt(Math.random() * 4);
            setArrayNumber([number1, number2, number3])
        }, rulesMachine.timer)

        setStopped(false)
    }
    
    const stopSpin = () => {
        clearInterval(interval)
        let newTotal = total;

        if (arrayNumber.length === 3 && !stopped) {
            if (
                arrayNumber.every(x => x === number1) ||
                arrayNumber.every(x => x === number2) ||
                arrayNumber.every(x => x === number3)
            ) {
                newTotal = total + rulesMachine.threeRight;
            } else if (
                (arrayNumber.filter(x => x === number1).length === 2 && arrayNumber[1] === number1) ||
                (arrayNumber.filter(x => x === number2).length === 2 && arrayNumber[1] === number2) ||
                (arrayNumber.filter(x => x === number3).length === 2 && arrayNumber[1] === number3)
            ) {
                newTotal = total + rulesMachine.twoRight;
            } else if (
                (arrayNumber.filter(x => x === number1).length === 2 && arrayNumber[1] !== number1) ||
                (arrayNumber.filter(x => x === number2).length === 2 && arrayNumber[1] !== number2) ||
                (arrayNumber.filter(x => x === number3).length === 2 && arrayNumber[1] !== number3)
            ) {
                newTotal = total + rulesMachine.twoRightSeparated;
            } else {
                newTotal = total;
            }

            setTotal(newTotal)
        }

        setStopped(true)
    }

    const resetGame = () => {
        setTotal(0)
    }

    useEffect(() => {
        if (!total) {
            startSpin()
        }
    }, [total]);

    return (
        <Machine>
            <MachineWrapper>
                <CasinoMachineFigure src={rulesMachine.jackpot[number1].url} />
                <CasinoMachineFigure src={rulesMachine.jackpot[number2].url} />
                <CasinoMachineFigure src={rulesMachine.jackpot[number3].url} />
            </MachineWrapper>
            <MachineButtons>
                <Button color="#880000" onClick={() => stopSpin()}>
                    Stop
                </Button>
                <Button color="#028800" onClick={() => startSpin()}>
                    Start
                </Button>
            </MachineButtons>
            <PrizeAmount>
                Prize amount:
                <PrizeAmountValue>
                    ${total ? total : 0}
                </PrizeAmountValue>
            </PrizeAmount>
            <Button color="#cccccc" type="reset" onClick={() => resetGame()}>
                Reset
            </Button>
        </Machine>
    );
}

export default CasinoMachine;
