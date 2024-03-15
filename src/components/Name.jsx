import React from 'react';

const Name = ({ text }) => {
    return (
        <div style={{ fontFamily: 'Arial', fontSize: '24px', color: 'blue' }}>
            {text}
        </div>
    );
};

export default Name;