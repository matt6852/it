import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost} from "./redux/state"
import {handleTextAreaValue} from "./redux/state";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} handleInput={handleTextAreaValue}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

