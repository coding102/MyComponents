import React, { Component } from 'react';
import './styles/App.css';

import Home from './components/home/Home';
import myComponents from './components/UIpage/myComponents';

class App extends Component {
    render() {
        return (
            <div className="container">

                <h1>Nav Bar</h1>
                <ul className="header">
                    <li>Home</li>
                    <li>Stuff</li>
                    <li>Contact</li>
                </ul>


                <div className="home-page">
                    <Home />
                </div>

                <div className="components-page">
                    <myComponents />
                </div>

            </div>
        );
    }
}

export default App;
