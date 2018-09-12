import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './containers/App'
import Profile from './containers/Profile'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore()

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/user/:name' component={Profile} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()