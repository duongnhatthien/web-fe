import React from 'react';
import Validator from 'validator';
import { Form, Input, Spin, message } from 'antd';
import { ButtonSubmit } from '../Header/style';
import { useMutation } from '@tanstack/react-query';
import * as UserService from '../../Services/UserService';
const prefixSelectorNumberPhone = <div>+84</div>;
const FrmRegisterComponent = ({ setIsModalOpen, setIsFormSigUpOpen }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [spinning, setSpinning] = React.useState(false);

    const mutationRegister = useMutation({
        mutationFn: (newTodo) => {
            return UserService.SignUp(newTodo);
        },
        onSuccess: (data, variables, context) => {
            setSpinning(false);
            messageApi.open({
                type: 'success',
                content: 'Sign up successfully',
            });
        },
        onError: (error, variables, context) => {
            console.log(error);
            setSpinning(false);
            messageApi.open({
                type: 'error',
                content: error.response.data.message.message,
            });
        },
    });
    const onFinishRegister = (values) => {
        setSpinning(true);
        mutationRegister.mutate({ ...values });
        setIsModalOpen(false);
    };
    return (
        <>
            {contextHolder}
            <Spin spinning={spinning} fullscreen />
            <Form
                className="login-form"
                width="100%"
                layout="vertical "
                name="normal_signup"
                initialValues={{ remember: true }}
                onFinish={onFinishRegister}>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (Validator.isStrongPassword(value)) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject(
                                        new Error(
                                            'Password is not strong enough!'
                                        )
                                    );
                                }
                            },
                        }),
                    ]}
                    hasFeedback>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue('password') === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        'The new password that you entered do not match!'
                                    )
                                );
                            },
                        }),
                    ]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="Name"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                        {
                            validator: (_, value) => {
                                if (value !== '') {
                                    if (
                                        !Validator.isMobilePhone(value, 'vi-VN')
                                    ) {
                                        return Promise.reject(
                                            new Error(
                                                'The input is not valid number phone!'
                                            )
                                        );
                                    } else return Promise.resolve();
                                }
                            },
                        },
                    ]}>
                    <Input
                        htmlType="tel"
                        addonBefore={prefixSelectorNumberPhone}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item>
                    <ButtonSubmit htmlType="submit">Đăng kí</ButtonSubmit>
                    Bạn đã có tài khoản?{' '}
                    <a
                        onClick={() => {
                            setIsFormSigUpOpen(false);
                        }}>
                        Đăng nhập ngay
                    </a>
                </Form.Item>
            </Form>
        </>
    );
};

export default FrmRegisterComponent;
