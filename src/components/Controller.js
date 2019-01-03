import React from 'react';

import './Controller.scss';

const Controller = ({ onAction }) => {

    return (
        <div className="Controller__root">
            <div className="Controller__panel"> 
                <i className="far fa-play-circle"></i>
                <i className="far fa-stop-circle"></i>
                <i className="far fa-times-circle"></i>
            </div>
        </div>
    );
};

export default Controller;