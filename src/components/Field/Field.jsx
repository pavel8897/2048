import React, { useState } from 'react';
import Box from '../Box/Box.jsx';
import './field.css';

let arr = []
for(let i=1;i<=16;i++) {
    arr.push({id: i, status: false});
}

function Field() {    
    const[box, setBox] = useState(arr);
    
    const boxes = box.map(item => {
        return <Box key={item.id} name={item.id} status={item.status} />
    })

    return (
        <div className="field">
            {boxes}
        </div>
    )
}

export default Field;

