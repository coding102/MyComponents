import React, { Component } from 'react';
import './styles/App.css';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="container">

                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Components">Projects</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>


                <div className="content">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default App;
