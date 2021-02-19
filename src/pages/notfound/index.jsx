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
                    <span style={{ color: '#424242', fontSize: 40, fontWeight: 600 }}>404</span>
                    <span style={{ marginBottom: 10, color: '#9a9a9a' }}>抱歉，您访问的页面不存在</span>
                    <Button type="primary">
                        <Link to="/admin/home">返回首页</Link>
                    </Button>
                </div>
            </HashRouter>
        )
    }
}
