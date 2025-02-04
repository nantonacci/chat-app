import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join.js';
import Chat from './components/Chat/Chat.js';
import index from './index.scss';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    );
}

export default App;