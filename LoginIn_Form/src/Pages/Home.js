import React from 'react';

const Home = () => {
    // Inline CSS for styling
    const divStyle = {
        textAlign: 'center',
        margin: '20px',
    };

    const h1Style = {
        color: 'blue',
        fontSize: '24px',
    };

    const aStyle = {
        textDecoration: 'none',
        color: 'green',
    };

    return (
        <div style={divStyle}>
            <div>
                <h1 style={h1Style}>Home Page</h1>
            </div>
            <div>
                <a href="/" style={aStyle}>go back to sign In</a>
            </div>
        </div>
    );
}

export default Home;
