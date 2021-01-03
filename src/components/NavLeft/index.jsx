import React, { Component } from 'react'
import menuList from '../../config/menuConfig'
import {
    NavLink
} from 'react-router-dom'
import { Menu } from 'antd'
import './index.less'

const { SubMenu } = Menu

export default class index extends Component {
    state = {
        menuTreeNodes: []
    }
    componentDidMount() {
        const menuTreeNodes = this.renderMenu(menuList)
        this.setState({
            menuTreeNodes
        })
    }
    /**
     * 生成导航菜单
     * @param data 导航配置数组
     */
    renderMenu = data => {
        return data.map(item => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu key={item.key} title={item.title}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>IOT-BIKE</h1>
                </div>
                <Menu theme="dark">
                    { this.state.menuTreeNodes }
                </Menu>
            </div>
        )
    }
}
