/**
 * @description 路由配置文件
 * @author Mars
 */
import Home from '../pages/home'
import City from '../pages/city'
import Order from '../pages/order'
import Map from '../pages/map'
import User from '../pages/user'
import Permission from '../pages/permission'
import Bar from '../pages/charts/Bar'
import Pie from '../pages/charts/Pie'
import Line from '../pages/charts/Line'

const routes = [
    {
        path: '/admin/home',
        name: 'home',
        label: '首页',
        component: Home
    },
    {
        path: '/admin/city',
        name: 'city',
        label: '城市管理',
        component: City
    },
    {
        path: '/admin/order',
        name: 'order',
        label: '订单管理',
        component: Order
    },
    {
        path: '/admin/map',
        name: 'map',
        label: '车辆地图',
        component: Map
    },
    {
        path: '/admin/user',
        name: 'user',
        label: '用户管理',
        component: User
    },
    {
        path: '/admin/permission',
        name: 'permission',
        label: '权限管理',
        component: Permission
    },
    {
        path: '/admin/charts/bar',
        name: 'bar',
        label: '条形图',
        component: Bar
    },
    {
        path: '/admin/charts/pie',
        name: 'pie',
        label: '饼图',
        component: Pie
    },
    {
        path: '/admin/charts/line',
        name: 'line',
        label: '折线图',
        component: Line
    }
]

export default routes
