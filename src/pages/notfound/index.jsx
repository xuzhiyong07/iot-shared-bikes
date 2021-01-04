import React, { Component } from 'react'
import './index.less'
import {
    Button
} from 'antd'
import {
    HashRouter,
    Link
} from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <HashRouter>
                <div className="not-found">
                    <h2>404 not found!</h2>
                    <Button>
                        <Link to="/admin/home">返回首页</Link>
                    </Button>
                </div>
            </HashRouter>
        )
    }
}
