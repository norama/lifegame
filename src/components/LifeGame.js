import React from 'react';
import { useState, useEffect } from 'react';

import Title from './Title';
import Grid from './Grid';
import Controller from './Controller';
import Config from './Config';
import Algorithm from '../algorithm/Algorithm';

import Actions from '../constants/actions';

import './LifeGame.scss';

const CONFIG = { minNew: 2, maxNew: 3, minKeep: 2, maxKeep: 3 };

const LifeGame = () => {
    const [generation, setGeneration] = useState(0);
    const [config, setConfig] = useState(CONFIG);
    const [algorithm, setAlgorithm] = useState(new Algorithm(CONFIG));

    const [action, setAction] = useState(Actions.START);

    useEffect(() => {
        setAlgorithm(new Algorithm(config));
    }, [config]);

    const handleFirst = () => {
        setGeneration(0);
    };

    const handleNext = () => {
        setGeneration(generation => generation + 1);
    };

    return (
        <div className='LifeGame__root'>
            <Controller action={action} onAction={setAction} />
            <Grid
                caption={<Title generation={generation} />}
                algorithm={algorithm}
                action={action}
                onAction={setAction}
                onFirst={handleFirst}
                onNext={handleNext}
            />
            <Config config={config} onChange={setConfig} />
        </div>
    );
};

export default LifeGame;