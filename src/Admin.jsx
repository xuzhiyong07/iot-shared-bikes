import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'

export default class Admin extends Component {
    state = {
        inlineCollapsed: false
    }
    /**
     * 修改折叠状态
     * @param {Boolean} status
     */
    changeInlineCollapsed (status) {
        this.setState({
            inlineCollapsed: status
        })
    }
    render() {
        const {inlineCollapsed} = this.state
        return (
            <div className="container">
                <div className="nav-left" style={{width: inlineCollapsed ? '80px' : '200px'}}>
                    <NavLeft inlineCollapsed={inlineCollapsed} />
                </div>
                <div className="main">
                    <Header
                        inlineCollapsed={inlineCollapsed}
                        changeInlineCollapsed={status => this.changeInlineCollapsed(status)}
                    />
                    <div className="content">
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
