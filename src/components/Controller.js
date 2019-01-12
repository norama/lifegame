import React from 'react';

import Actions from '../constants/actions';

import './Controller.scss';

const Controller = ({ onAction }) => {

    const handleClear = () => { onAction(Actions.CLEAR); };

    return (
        <div className="Controller__root">
            <div className="Controller__panel"> 
                <i className="far fa-play-circle"></i>
                <i className="far fa-stop-circle"></i>
                <i className="far fa-times-circle" onClick={handleClear}></i>
            </div>
        </div>
    );
};

export default Controller;