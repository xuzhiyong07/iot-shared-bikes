import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Login from '../pages/login'
import Admin from '../Admin'
import NotFound from '../pages/notfound'
import routes from './routes'

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
                                {
                                    routes.map((route, index) => {
                                        return <Route key={index} path={route.path} component={route.component} />
                                    })
                                }
                                <Route component={NotFound} />
                            </Switch>
                        </Admin>
                    )} />
                </App>
            </HashRouter>
        )
    }
}
