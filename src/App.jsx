import React from 'react';
import './style.css';
import Puzzle from './puzzle.jsx';

function App() {
    return (
        <div className='container'>
            <h3>Выберите изображение и сложность</h3>
            <select name="" id="">
                <option value="3">Легко</option>
                <option value="4">Нормально</option>
                <option value="5">Сложно</option>
            </select>
            <div className="pics">
                <img src="../img1.jpg" alt="" />
                <img src="../img2.jpg" alt="" />
                <img src="../img3.jpg" alt="" />
            </div>
            <Puzzle />
        </div>        
    )
}

export default App;
