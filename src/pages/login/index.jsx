import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'

import './index.less'

const layout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 17,
    }
}
const tailLayout = {
    wrapperCol: {
        offset: 7,
        span: 17,
    }
}

export default class Login extends Component {
    onFinish = values => {
        if (values.username === 'xusi' && values.password === '123qwe') {
            message.success('登陆成功！')
            this.props.history.replace('/')
        } else {
            message.error('用户名或密码错误！')
        }
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }
    render() {
        return (
            <div className="login-content">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
