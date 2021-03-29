import React, { Component } from 'react'
import { Card, Button, Table, Form, Select, DatePicker, message } from 'antd'
import { getOrder } from '../../api/fetch'
import { CITYENUM, ORDERSTATUS } from '../../common/enumeration'
import { formatByEnum } from '../../utils/utils'
import './index.less'

const FormItem = Form.Item
const Option = Select.Option
const { RangePicker } = DatePicker

export default class Order extends Component {
    state = {
        list: []
    }

    params = {
        page: 1
    }

    componentDidMount(){
        this.requestList()
    }

    // 默认请求我们的接口数据
    requestList = () => {
        getOrder().then(res => {
            if (res.code === 0) {
                const list = res.result
                this.setState({
                    list: list
                })
            } else {
                message.error(res.message)
            }
        }).catch(err => {
            console.log(err)
        })
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
            { title: '订单编号', dataIndex: 'order_sn' },
            { title: '车辆编号', dataIndex: 'bike_sn' },
            { title: '用户名', dataIndex: 'user_name' },
            { title: '手机号码', dataIndex: 'mobile' },
            { title: '里程', dataIndex: 'distance' },
            {
                title: '行程时长',
                dataIndex: 'total_time',
                render: total_time => parseInt(total_time / 1000) + '分钟'
            },
            {
                title: '状态',
                dataIndex: 'status',
                render: status => formatByEnum(status, ORDERSTATUS)
            },
            { title: '开始时间', dataIndex: 'start_time' },
            { title: '结束时间', dataIndex: 'end_time' },
            { title: '订单金额', dataIndex: 'total_fee' },
            { title: '实付金额', dataIndex: 'user_pay' },
            {
                title: '操作',
                render: row => {
                    return <Button onClick={this.resetSearchForm}>重置</Button>
                }
            }
        ]
        return (
            <div className="order">
                <Card>
                    <FilterForm requestList={() => this.requestList()} />
                </Card>
                <div className="content-wrap" style={{marginTop:10}}>
                    <Table
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
            </div>
        )
    }
}

class FilterForm extends React.Component{
    formRef = React.createRef()
    /**
     * 重置查询条件
     */
    resetSearchForm = () => {
        this.formRef.current.resetFields()
        this.props.requestList()
    }
    render() {
        return (
            <Form layout="inline" ref={this.formRef} onFinish={values => this.props.requestList(values)}>
                <FormItem label="城市" name="city">
                    <Select style={{ width: 160 }} allowClear placeholder="请选择城市">
                        {
                            CITYENUM.map((item, index) => {
                                return <Option key={index} value={item.value}>{item.label}</Option>
                            })
                        }
                    </Select>
                </FormItem>
                <FormItem label="" name="time">
                    <RangePicker
                        placeholder={['请输入开始时间', '请输入结束时间']}
                    />
                </FormItem>
                <FormItem label="订单状态" name="status">
                    <Select style={{ width: 160 }} allowClear placeholder="请选择订单状态">
                        {
                            ORDERSTATUS.map((item, index) => {
                                return <Option key={index} value={item.value}>{item.label}</Option>
                            })
                        }
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" style={{margin:'0 20px'}}>查询</Button>
                    <Button onClick={this.resetSearchForm}>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
