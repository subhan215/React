// square.jsx
import React from 'react';

const Square = ({ value, click }) => {
    return (
        <div className="square" onClick={click}>
            <h5>{value}</h5>
        </div>
    );
};

export default Square;
