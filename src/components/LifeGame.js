import React from 'react';
import { useState } from 'react';

import Title from './Title';
import Grid from './Grid';
import Controller from './Controller';
import Config from './Config';

import './LifeGame.scss';

const CONFIG = { minNew: 2, maxNew: 3, minKeep: 2, maxKeep: 3 };

const Actions = {
    CLEAR: 0,
    STEP: 1,
    PLAY: 2
};

const LifeGame = () => {
    const [generation, setGeneration] = useState(0);
    const [config, setConfig] = useState(CONFIG);

    const [action, setAction] = useState(Actions.CLEAR);

    console.log(config);

    return (
        <div className='LifeGame__root'>
            <Title generation={generation} />
            <Grid n={3} m={5} />
            <Controller onAction={setAction} />
            <Config config={config} onChange={setConfig} />
        </div>
    );
};

export default LifeGame;