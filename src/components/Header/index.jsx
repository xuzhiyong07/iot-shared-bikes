import React, { Component } from 'react'
import {
    Row,
    Col,
    Button
} from 'antd'
import './index.less'
import axios from '../../axios'
export default class index extends Component {
    state = {
        userName: 'HEHE',
        nowDate: '',
        dateInterval: null
    }

    componentDidMount() {
        const dateInterval = setInterval(() => {
            this.setState({
                nowDate: new Date().toLocaleString()
            })
        }, 1000)
        this.setState({
            dateInterval
        })
        // this.getWeatherApi()
    }
    

    componentWillUnmount() {
        clearTimeout(this.dateInterval)
    }

    /**
     * 获取百度天气
     */
    getWeatherApi () {
        const city = '101021400'
        const ak = 'BjWbdlGqQp5TUkKVOTIZsoROHvE9a6bK'
        axios.jsonp({
            url: `http://api.map.baidu.com/telematics/v3/weather?district_id=${city}&data_type=all&coordtype=wgs84&output=json&ak=${ak}`
        }).then(res => {
            console.log('000')
        }).catch(err => {
            // console.log(err)
        })
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
