import React, { Component } from 'react'
import {
    Row,
    Col,
    Button
} from 'antd'
import './index.less'
// import fetchJsonp from 'fetch-jsonp'
const AMap = window.AMap
export default class index extends Component {
    state = {
        userName: 'HEHE',
        nowDate: '',
        dateInterval: null,
        whether: {}
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
        this.getWeatherApi()
    }
    

    componentWillUnmount() {
        clearTimeout(this.dateInterval)
    }

    /**
     * 获取百度天气
     */
    getWeatherApi () {
        const _this = this
        AMap.plugin('AMap.Weather', function() {
            //创建天气查询实例
            var weather = new AMap.Weather()
        
            //执行实时天气信息查询
            weather.getLive('上海市', function(err, data) {
                if (err) {
                    console.log(err)
                    return
                }
                _this.setState({
                    whether: data
                })
            });
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
                        {
                            this.state.whether.weather && (
                                <span className="weather-detail">
                                    <span style={{ marginLeft: 8 }}>天气: { this.state.whether.weather }</span>
                                    <span style={{ marginLeft: 8 }}>温度: { this.state.whether.temperature }℃</span>
                                    <span style={{ marginLeft: 8 }}>风向: { this.state.whether.windDirection }</span>
                                    <span style={{ marginLeft: 8 }}>风力: { this.state.whether.windPower }</span>
                                </span>
                            )
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}
