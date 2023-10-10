import React, { useState } from 'react';
import Field from '../Field/Field.jsx'
import './app.css';

let gridSize = 4;
let arr = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));

function App() {
    const [cells, setCells] = useState(arr);

    return (
        <div className="field">
            <Field cells={cells} gridSize={gridSize} />
        </div>        
    )
}

export default App;
