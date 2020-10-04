import React from 'react'
import {BoxDifficulty, ImagemStart} from './componentsStyled'
import start from './image/star.png'

const LevelCard = ({difficulty}) => {
    if(difficulty === 'easy') return (
        <BoxDifficulty>
            <div>
                <ImagemStart src={start} alt='estrelha'/>
            </div>
            <h2 style={{fontSize:'12px'}}>Fácil</h2>
        </BoxDifficulty>
    )
    if(difficulty === 'medium') return (
        <BoxDifficulty>
            <div>
                <ImagemStart src={start} alt='estrelha'/>
                <ImagemStart src={start} alt='estrelha'/>
            </div>
            <h2 style={{fontSize:'12px'}}>Médio</h2>
        </BoxDifficulty>
    )
    if(difficulty === 'hard') return (
        <BoxDifficulty>
            <div>
                <ImagemStart src={start} alt='estrelha'/>
                <ImagemStart src={start} alt='estrelha'/>
                <ImagemStart src={start} alt='estrelha'/>
            </div>
            <h2 style={{fontSize:'12px'}}>Difícil</h2>
        </BoxDifficulty>
    )
    return null
}

export default LevelCard