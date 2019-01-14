import React from 'react';
import PropTypes from "prop-types";

import classNames from 'classnames';

import Actions from '../constants/actions';

import './Controller.scss';

const Controller = ({ action, onAction }) => {

    const handleClear = () => { if (action !== Actions.PLAY) { onAction(Actions.CLEAR); } };
    const handleStop = () => { onAction(Actions.STOP); };
    const handlePlay = () => { onAction(Actions.PLAY); };
    const handleStep = () => { if (action !== Actions.PLAY) { onAction(Actions.STEP); } };

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

Controller.propTypes = {
    action: PropTypes.oneOf(Object.values(Actions)).isRequired,
    onAction: PropTypes.func.isRequired
};

export default Controller;