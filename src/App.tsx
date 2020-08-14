import React from 'react';
import css from './App.module.scss';

function App() {
    return (
        <div className={css.ctn}>
            <header className="App-header">
                <button onClick={() => window.location.href = 'twitter://post?message=hi%20mars'}>
                    () => location.href='twitter://post?message=hi%20mars'
                </button>

                {/*Link to a Custom URL Scheme*/}
                <a className="App-link" href="twitter://post?message=hello%20world">
                    href="twitter://post?message=hello%20world"
                </a>

                {/*In development, your app will live at a url like*/}
                <a className="App-link" href="exp://192.168.68.111:19000">
                    href="exp://192.168.68.111:19000"
                </a>

                {/*When it's deployed, it will be at a URL like*/}
                {/*<a className="App-link" href="exp://exp.host/@community/with-webbrowser-redirect">*/}
                {/*    href="exp://exp.host/@community/with-webbrowser-redirect"*/}
                {/*</a>*/}
            </header>
        </div>
    );
}

export default App;
