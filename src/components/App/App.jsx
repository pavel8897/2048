import React, { useState } from 'react';
import Field from '../Field/Field.jsx'
import './app.css';

let gridSize = 4;
let arr = [];
for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <= gridSize; j++) {
        arr.push({ row: i, col: j });
    }
}

function App() {
    const [cells, setCells] = useState(arr);

    return (
        <Field arr={cells} />
    )
}

export default App;
