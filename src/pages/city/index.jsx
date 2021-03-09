import React from 'react'
import { Card, Button, Table, Form, Select, Modal } from 'antd'
import { getOpenCity } from '../../api/fetch'
import { connect } from 'react-redux'
import './index.less'

const FormItem = Form.Item
const Option = Select.Option

export default connect(
    state => ({count: state}),
    {
        add: () => ({type: 'ADD'})
    }
)(class City extends React.Component{
    state = {
        list: [],
        isShowOpenCity: false
    }

    params = {
        page: 1
    }

    componentDidMount(){
        this.requestList()
    }

    // 默认请求我们的接口数据
    requestList = () => {
        getOpenCity().then(res => {
            const list = res.list
            this.setState({
                list: list
            })
        }).catch(err => {
            console.log(err)
        })
    }

    // 开通城市
    handleOpenCity = () => {
        this.setState({
            isShowOpenCity:true
        })
    }
    // 城市开通提交
    handleSubmit = () => {
        // const cityInfo = this.cityForm.props.form.getFieldsValue()
    }
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                width: 70,
                align: 'center',
                render: (text, record, index) => {
                    return index + 1
                }
            },
            {
                title: '城市ID',
                dataIndex: 'id'
            },
            {
                title: '城市名称',
                dataIndex: 'name'
            },
            {
                title: '用车模式',
                dataIndex: 'mode'
            },
            {
                title: '营运模式',
                dataIndex: 'op_mode'
            },
            {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            },
            {
                title: '城市管理员',
                dataIndex: 'city_admins'
            },
            {
                title: '城市开通时间',
                dataIndex: 'open_time'
            },
            {
                title: '操作时间',
                dataIndex: 'update_time'
            },
            {
                title: '操作人',
                dataIndex: 'sys_user_name'
            }
        ]
        return (
            <div className="city">
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
                <Modal 
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    onCancel={()=>{
                        this.setState({
                            isShowOpenCity:false
                        })
                    }}
                    onOk={this.handleSubmit}
                >
                    <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm = inst}}/>
                </Modal>
            </div>
        )
    }
})

class FilterForm extends React.Component{
    render() {
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    <Select
                        style={{ width: 100 }}
                        placeholder="全部"
                    >
                        <Option value="">全部</Option>
                        <Option value="1">北京市</Option>
                        <Option value="2">天津市</Option>
                        <Option value="3">深圳市</Option>
                    </Select>
                </FormItem>
                <FormItem label="用车模式">
                    <Select
                        style={{ width: 120 }}
                        placeholder="全部"
                    >
                        <Option value="">全部</Option>
                        <Option value="1">指定停车点模式</Option>
                        <Option value="2">禁停区模式</Option>
                    </Select>
                </FormItem>
                <FormItem label="营运模式">
                    <Select
                        style={{ width: 80 }}
                        placeholder="全部"
                    >
                        <Option value="">全部</Option>
                        <Option value="1">自营</Option>
                        <Option value="2">加盟</Option>
                    </Select>
                </FormItem>
                <FormItem label="加盟商授权状态">
                    <Select
                        style={{ width: 100 }}
                        placeholder="全部"
                    >
                        <Option value="">全部</Option>
                        <Option value="1">已授权</Option>
                        <Option value="2">未授权</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}

class OpenCityForm extends React.Component{
    render() {
        const formItemLayout = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            }
        }
        return (
            <Form layout="horizontal">
                <FormItem label="选择城市" {...formItemLayout}>
                    <Select style={{ width: 100 }}>
                        <Option value="">全部</Option>
                        <Option value="1">北京市</Option>
                        <Option value="2">天津市</Option>
                    </Select>
                </FormItem>
                <FormItem label="营运模式" {...formItemLayout}>
                    <Select style={{ width: 100 }}>
                        <Option value="1">自营</Option>
                        <Option value="2">加盟</Option>
                    </Select>
                </FormItem>
                <FormItem label="用车模式" {...formItemLayout}>
                    <Select style={{ width: 100 }}>
                        <Option value="1">指定停车点</Option>
                        <Option value="2">禁停区</Option>
                    </Select>
                </FormItem>
            </Form>
        )
    }
}
