import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Input, Checkbox, Flex, message, Spin } from 'antd';
import { ButtonSubmit } from '../Header/style';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
    selectCurrentUser,
    updateCurrentUser,
} from '../../redux/Slide/userReducer';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import * as UserService from '../../Services/UserService';
import { jwtDecode } from 'jwt-decode';
const FrmLoginComponent = ({ setIsModalOpen, setIsFormSigUpOpen }) => {
    const [spinning, setSpinning] = useState(false);
    const dispathCurrentUser = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const mutationLogin = useMutation({
        mutationFn: (newTodo) => {
            return UserService.SignIn(newTodo);
        },
        onSuccess: (data, variables, context) => {
            setSpinning(false);
            const access_token = data.data.access_token;
            const decode = jwtDecode(access_token);
            localStorage.setItem('access_token', access_token);
            UserService.getDetailUser(
                decode.payload.id,
                data.data.access_token
            ).then((result) => {
                dispathCurrentUser(
                    updateCurrentUser({ ...result.data.data, access_token })
                );
            });
            messageApi.open({
                type: 'success',
                content: `Login successfully`,
            });
        },
        onError: (error, variables, context) => {
            setSpinning(false);
            console.log(error);
            messageApi.open({
                type: 'error',
                content: error.response.data.message.message,
            });
        },
    });
    const onFinishLogin = (values) => {
        setSpinning(true);
        mutationLogin.mutate({ ...values });
        setIsModalOpen(false);
    };
    return (
        <>
            {contextHolder}
            <Spin spinning={spinning} fullscreen />
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinishLogin}>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                    ]}>
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}>
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                    <Flex alignItems="center" justify="space-between">
                        <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Flex>
                </Form.Item>
                <Form.Item>
                    <ButtonSubmit
                        htmlType="submit"
                        className="login-form-button">
                        Sign in
                    </ButtonSubmit>
                    Or{' '}
                    <a
                        onClick={() => {
                            setIsFormSigUpOpen(true);
                        }}>
                        register now!
                    </a>
                </Form.Item>
            </Form>
        </>
    );
};

export default FrmLoginComponent;
