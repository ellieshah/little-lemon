import React from 'react';

const Main = () => {
    const handleReserve = () => {
        alert('Table reserved!');
    };

    return (
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button onClick={handleReserve}>Reserve a Table</button>
        </div>
    );
};

export default Main;