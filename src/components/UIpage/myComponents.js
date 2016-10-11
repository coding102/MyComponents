import React, { Component } from 'react';
import Header from './Header';
import Fish from './Fish';
import Order from './Order';
import Inventory from './Inventory';


class myComponents extends Component {
    render() {
        return (
            <div>
            
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header tagline="Fresh Seafood Market" />
                        <Fish />
                    </div>

                    <Order />
                    <Inventory />
                </div>

            </div>
        );
    }
}

export default myComponents;

