import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'

export default class Admin extends Component {
    render() {
        return (
            <div className="container">
                <div className="nav-left">
                    <NavLeft />
                </div>
                <div className="main">
                    <Header />
                    <div className="content">
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
