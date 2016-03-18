import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Main from '../components/Main.js'
import Top from '../components/Top.js'
import AboutContainer from '../containers/AboutContainer.js'

let routes = (
    <Router history = { browserHistory }>
        <Route path="/" component={ Main } >
            <IndexRoute component={ Top } />
            <Route path="/about" component = { AboutContainer } />
        </Route>
    </Router>
)

export default routes
