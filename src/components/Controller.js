import React from 'react';

import classNames from 'classnames';

import Actions from '../constants/actions';

import './Controller.scss';

const Controller = ({ action, onAction }) => {

    const handleClear = () => { onAction(Actions.CLEAR); };
    const handleStop = () => { onAction(Actions.STOP); };
    const handlePlay = () => { onAction(Actions.PLAY); };
    const handleStep = () => { onAction(Actions.STEP); };

    const classStop = "far fa-stop-circle enabled";
    const classPlay = "far fa-play-circle enabled";
    const classStep = classNames("fas fa-shoe-prints", action === Actions.PLAY ? "disabled" : "enabled");
    const classClear = classNames("far fa-times-circle", action === Actions.PLAY ? "disabled" : "enabled");

    return (
        <div className="Controller__root">
            <div className="Controller__panel"> 
                {action === Actions.PLAY ?
                    <i className={classStop} onClick={handleStop}></i> :
                    <i className={classPlay} onClick={handlePlay}></i>
                }
                <i className={classStep} onClick={handleStep}></i>
                <i className={classClear} onClick={handleClear}></i>
            </div>
        </div>
    );
};

export default Controller;