import React, { Component } from 'react'
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import App from '../App'
import Login from '../pages/login'
import Admin from '../Admin'
import Home from '../pages/home'
import City from '../pages/city'
import NotFound from '../pages/notfound'

const loggedIn = true
export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route exact path="/" render={() => (
                        loggedIn ? <Redirect to="/admin" /> : <Redirect to="/login" />
                    )}/>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() => (
                        <Admin>
                            <Switch>
                                <Route exact path="/admin" render={() => <Redirect to="/admin/home" />} />
                                <Route path="/admin/home" component={Home} />
                                <Route path="/admin/city" component={City} />
                                <Route component={NotFound} />
                            </Switch>
                        </Admin>
                    )} />
                </App>
            </HashRouter>
        )
    }
}
