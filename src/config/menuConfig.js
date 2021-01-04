const menuList = [
    {
        title: '首页',
        key: '/admin/home',
        icon: 'iconhome'
    },
    {
        title: '城市管理',
        key: '/admin/city',
        icon: 'iconcity'
    },
    {
        title: '订单管理',
        key: '/admin/order',
        icon: 'iconorder',
        btnList: [
            {
                title: '订单详情',
                key: '/admin/order/detail'
            },
            {
                title: '结束订单',
                key: '/admin/order/finish'
            }
        ]
    },
    {
        title: '员工管理',
        key: '/admin/user',
        icon: 'iconyuangong'
    },
    {
        title: '车辆地图',
        key: '/admin/bikeMap',
        icon: 'iconmap'
    },
    {
        title: '数据可视化',
        key: '/admin/charts',
        icon: 'iconchart',
        children: [
            {
                title: '柱形图',
                key: '/admin/charts/bar'
            },
            {
                title: '饼图',
                key: '/admin/charts/pie'
            },
            {
                title: '折线图',
                key: '/admin/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/admin/permission',
        icon: 'iconquanxianshezhi'
    },
];
export default menuList;