import React, { Component } from 'react'
import menuList from '../../config/menuConfig'
import {
    NavLink
} from 'react-router-dom'
import { Menu } from 'antd'
import MyIcon from '../../components/IconFont'
import './index.less'

const { SubMenu } = Menu

export default class index extends Component {
    state = {
        menuTreeNodes: [],
        selectedKeys: []
    }
    componentDidMount() {
        const menuTreeNodes = this.renderMenu(menuList)
        this.setState({
            menuTreeNodes,
            selectedKeys: [window.location.hash.slice(1)]
        })
        // 监听路由变化
        onhashchange = (e) => {
            this.setState({
                selectedKeys: [e.newURL.split('#')[1]]
            })
        }
    }
    /**
     * 生成导航菜单
     * @param {Array} data 导航配置数组
     * @returns {Element} menuTreeNodes 导航树节点
     */
    renderMenu = data => {
        return data.map(item => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu key={item.key} title={item.title} icon={<MyIcon type={item.icon} />}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key} icon={<MyIcon type={item.icon} />}>
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
                <Menu
                    theme="dark"
                    triggerSubMenuAction="click"
                    mode="inline"
                    selectedKeys={ this.state.selectedKeys }
                >
                    { this.state.menuTreeNodes }
                </Menu>
            </div>
        )
    }
}
