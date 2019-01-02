import React from 'react';
import { useState } from 'react';

import Title from './Title';
import Grid from './Grid';
import Controller from './Controller';
import Config from './Config';

const LifeGame = () => {
    const [generation, setGeneration] = useState(0);
    const [config, setConfig] = useState({});

    return (
        <div>
            <Title generation={generation} />
            <Grid n={3} m={5} />
            <Controller />
            <Config config={config} onChange={setConfig} />
        </div>
    );
};

export default LifeGame;