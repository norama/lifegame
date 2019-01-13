import React from 'react';

import _ from 'lodash';

import Select from 'react-select';

import 'bootstrap/dist/css/bootstrap.css';

import './Config.scss';

const options = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
];

const Types = {
    NEW: "new",
    KEEP: "keep"
};

const Config = ({ config, onChange }) => {

    const handleChangeNew = (minNew, maxNew) => {
        onChange(_.assign(_.clone(config), { minNew, maxNew }));
    }

    const handleChangeKeep = (minKeep, maxKeep) => {
        onChange(_.assign(_.clone(config), { minKeep, maxKeep }));
    }

    return (
        <div className="Config__root">
            <ConfigPanel
                type={Types.NEW} 
                min={config.minNew}
                max={config.maxNew}
                onChange={handleChangeNew}
            />
            <ConfigPanel
                type={Types.KEEP} 
                min={config.minKeep}
                max={config.maxKeep}
                onChange={handleChangeKeep}
            />
        </div>
    );
};

const ConfigPanel = ({ min, max, type, onChange }) => {

    const handleChangeMin = (option) => {
        const inputMin = option.value;
        if (inputMin !== min) {
            onChange(inputMin, Math.max(max, inputMin));
        }
    };

    const handleChangeMax = (option) => {
        const inputMax = option.value;
        if (inputMax !== max) {
            onChange(Math.min(min, inputMax), inputMax);
        }
    };

    return (
        <div className="Config__panel">
            <div className="Config__img">
                <i className={"fas fa-square-full" + (type === Types.NEW ? "" : " alive")}></i>
                <i className="fas fa-arrow-right"></i>
                <i className="fas fa-square-full alive"></i>
            </div>
            <div className="Config__row">
                <Select
                    options={options}
                    value={options[min-1]}
                    onChange={handleChangeMin}
                    className="select"
                />
                <i className="fas fa-minus"></i>
                <Select
                    options={options}
                    value={options[max-1]}
                    onChange={handleChangeMax}
                    className="select"
                />
            </div>
            <div className="Config__label">
                {type === Types.NEW ? "Birth" : "Survival"}
            </div>
        </div>
    );
};

export default Config;