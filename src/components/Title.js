import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ generation }) => (
    <div className="Title__root">
        <div className="Title__placeholder"/>
        <div className="Title__label">Generation:</div>
        <div className="Title__value">{generation}</div>
    </div>
);

Title.propTypes = {
    generation: PropTypes.number.isRequired
};

export default Title;