import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './components/home/Home';
import NotFound from './components/notFound';
import myComponents from './components/UIpage/myComponents';
import contactMe from './components/contact/contactMe';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}> 
            <IndexRoute component={Home} />
            <Route path="Components" component={myComponents} />
            <Route path="Contact" component={contactMe} />

            <Route path='*' component={NotFound} />
        </Route>
    </Router>
), document.getElementById('root'))

