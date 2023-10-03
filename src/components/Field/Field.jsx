import React, { useState } from 'react';
import Box from '../Box/Box.jsx';
import './field.css';
import { useSelector } from 'react-redux';

function Field() {    
    const cells = useSelector(state => state)
    
    const boxes = box.map((item, i) => {
        return <Box key={i} />
    })

    return (
        <div className="field">
            {boxes}
        </div>
    )
}

export default Field;

