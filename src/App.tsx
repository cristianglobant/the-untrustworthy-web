import React from 'react';
import logo from './logo.svg';
import './App.css';

const twitterPostWithHref = () => {
    window.location.href = 'twitter://post?message=hello%20mars';
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="twitter://post?message=hello%20world">
                    Twitter post "Hello World"
                </a>
                <br/>
                <button onClick={twitterPostWithHref}>
                    Twitter Timeout Post
                </button>
            </header>
        </div>
    );
}

export default App;
