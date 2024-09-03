import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';
import './App.css';

function App() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ color: 'black' }}>HELLO REDUX</h1>
            </header>
            <div className="Counter-container">
                <h2>{count}</h2>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    );
}

export default App;

