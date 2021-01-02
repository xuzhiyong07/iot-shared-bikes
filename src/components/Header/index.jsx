import React, { Component } from 'react'
import {
    Row,
    Col,
    Button
} from 'antd'
import './index.less'

export default class index extends Component {
    state = {
        userName: 'HEHE',
        nowDate: ''
    }

    date = setInterval(() => {
        this.setState({
            nowDate: new Date().toLocaleString()
        })
    }, 1000)

    componentWillUnmount() {
        clearTimeout(this.date)
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24" className="header-content">
                        <span>你好，{ this.state.userName }</span>
                        <Button type="link" className="logout">退出</Button>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">首页</Col>
                    <Col span="20" className="weather">
                        <span className="date">{ this.state.nowDate }</span>
                        <span className="weather-detail">晴</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
