import React from 'react'
import { Card, Button, Table, Form, Select, Modal, message, Radio } from 'antd'
import { getOpenCity } from '../../api/fetch'
import { connect } from 'react-redux'
import { OPERATEPATTERN, BIKEUSEPATTERN, CITYENUM } from '../../common/enumeration'
import { formatByEnum } from '../../utils/utils'
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

    // 开通城市
    handleOpenCity = () => {
        this.setState({
            isShowOpenCity:true
        })
    }
    // 城市开通提交
    saveOpenCity = values => {
        console.log(values)
        this.setState({
            isShowOpenCity: false
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
                dataIndex: 'mode',
                render: mode => formatByEnum(mode, BIKEUSEPATTERN)
            },
            {
                title: '营运模式',
                dataIndex: 'op_mode',
                render: op_mode => formatByEnum(op_mode, OPERATEPATTERN)
            },
            {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            },
            {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render: city_admins => {
                    if (!city_admins) {
                        return ''
                    }
                    return city_admins.map(admin => admin.name).join(',')
                }
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
                    <FilterForm
                        requestList={() => this.requestList()}
                    />
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
                {
                    this.state.isShowOpenCity &&
                    <Modal 
                        title="开通城市"
                        destroyOnClose={true}
                        keyboard={false}
                        maskClosable={false}
                        visible={this.state.isShowOpenCity}
                        onCancel={() => {
                            this.setState({
                                isShowOpenCity: false
                            })
                        }}
                        footer={null}
                    >
                        <OpenCityForm
                            sendValues={values => this.saveOpenCity(values)}
                            cancelModal={() => this.setState({isShowOpenCity: false})}
                        />
                    </Modal>
                }
                
            </div>
        )
    }
})

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
                <FormItem label="开通城市" name="openCity">
                    <Select style={{ width: 160 }} allowClear placeholder="请选择开通城市">
                        {
                            CITYENUM.map((item, index) => {
                                return <Option key={index} value={item.value}>{item.label}</Option>
                            })
                        }
                    </Select>
                </FormItem>
                <FormItem label="用车模式" name="bikeUsePattern">
                    <Select style={{ width: 160 }} allowClear placeholder="请选择用车模式">
                        {
                            BIKEUSEPATTERN.map((item, index) => {
                                return <Option key={index} value={item.value}>{item.label}</Option>
                            })
                        }
                    </Select>
                </FormItem>
                <FormItem label="营运模式" name="operatPattern">
                    <Select style={{ width: 160 }} allowClear placeholder="请选择营运模式">
                        {
                            OPERATEPATTERN.map((item, index) => {
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

class OpenCityForm extends React.Component{
    render() {
        const formItemLayout = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                offset: 1,
                span: 19
            }
        }
        const formCityLayout = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                offset: 1,
                span: 8
            }
        }
        const {sendValues, cancelModal} = this.props
        return (
            <Form
                layout="horizontal"
                preserve={false}
                initialValues={{
                    'openCity': '100',
                    'bikeUsePattern': 1,
                    'operatPattern': 1,
                }}
                onFinish={values => sendValues(values)}
            >
                <FormItem name="openCity" label="开通城市" {...formCityLayout}>
                    <Select placeholder="请选择开通城市">
                        {
                            CITYENUM.map((item, index) => {
                                return <Option key={index} value={item.value}>{item.label}</Option>
                            })
                        }
                    </Select>
                </FormItem>
                <FormItem name="bikeUsePattern" label="用车模式" {...formItemLayout}>
                    <Radio.Group>
                        {
                            BIKEUSEPATTERN.map((item, index) => {
                                return <Radio key={index} value={item.value}>{item.label}</Radio>
                            })
                        }
                    </Radio.Group>
                </FormItem>
                <FormItem name="operatPattern" label="营运模式" {...formItemLayout}>
                    <Radio.Group>
                        {
                            OPERATEPATTERN.map((item, index) => {
                                return <Radio key={index} value={item.value}>{item.label}</Radio>
                            })
                        }
                    </Radio.Group>
                </FormItem>
                <FormItem wrapperCol={{offset: 12, span: 24}}>
                    <Button type="primary" style={{margin:'0 20px'}} htmlType="submit">保存</Button>
                    <Button onClick={cancelModal}>取消</Button>
                </FormItem>
            </Form>
        )
    }
}
