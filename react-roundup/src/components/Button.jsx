import React from 'react';

const Button = ({text, color}) => (
    <button 
        style={{ backgroundColor: color }}
    >
        {`Hello ${text}`}
    </button>
)

export default Button;