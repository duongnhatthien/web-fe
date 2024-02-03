import React from 'react';
import { RightOutlined, StarFilled } from '@ant-design/icons';
import { WrapperBreadcrumb, NavHeader, NavRating } from './style';
import {
    Breadcrumb,
    Layout,
    Menu,
    theme,
    Pagination,
    ConfigProvider,
    Flex
} from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';
import CardComponent from '../../components/Card/CardComponent';
import { WrapperHomeGrid } from '../Home/style';
const { Content, Sider } = Layout;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items2 = [
    getItem(
        <NavHeader>Danh mục sản phẩm</NavHeader>,
        'sub1',
        null,
        [
            getItem('English Books', 'g1', null, null, 'sub'),
            getItem('sách tiếng Việt', 'g2', null, null, 'sub'),
            getItem('Văn phòng phẩm', 'g3', null, null, 'sub'),
            getItem('Quà lưu niệm', 'g4', null, null, 'sub'),
        ],
        'group'
    ),
    getItem(
        <NavHeader>Dịch vụ</NavHeader>,
        'sub2',
        null,
        [
            getItem(<Checkbox>Giao siêu tốc</Checkbox>, '5', null, null, 'sub'),
            getItem(<Checkbox>Trả góp 0%</Checkbox>, '6', null, null, 'sub'),
            getItem(<Checkbox>Giảm sâu</Checkbox>, '7', null, null, 'sub'),
        ],
        'group'
    ),
    getItem(
        <NavHeader>Dịch vụ</NavHeader>,
        'sub2',
        null,
        [
            getItem(
                <NavRating>
                    <p>
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#FDDA3F' }} />
                    </p>
                    <span>Từ 5 sao</span>
                </NavRating>,
                '8',
                null,
                null,
                'sub'
            ),
            getItem(
                <NavRating>
                    <p>
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#BCBCBC' }} />
                    </p>
                    <span>Từ 4 sao</span>
                </NavRating>,
                '8',
                null,
                null,
                'sub'
            ),
            getItem(
                <NavRating>
                    <p>
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#FDDA3F' }} />
                        <StarFilled style={{ color: '#BCBCBC' }} />
                        <StarFilled style={{ color: '#BCBCBC' }} />
                    </p>
                    <span>Từ 3 sao</span>
                </NavRating>,
                '8',
                null,
                null,
                'sub'
            ),
        ],
        'group'
    ),
];

const TypeProductPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <WrapperBreadcrumb separator={<RightOutlined />}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </WrapperBreadcrumb>

            <Layout
                style={{
                    width: '1440px',
                    padding: '0px 24px',
                    margin: '0px auto',
                    display: 'flex',
                    gap: '8px',
                }}>
                <Sider
                    style={{
                        background: colorBgContainer,
                        width: '200px',
                    }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        width: 'calc(100% - 208px)',
                    }}>
                    <WrapperHomeGrid>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WrapperHomeGrid>
                    <Flex justify='center'>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Pagination: {
                                        itemSize: 42,
                                    },
                                },
                            }}>
                            <Pagination
                                showSizeChanger={false}
                                defaultCurrent={3}
                                total={500}
                                style={{
                                    padding: '0px',
                                    margin: '77px 0px 16px',
                                }}
                            />
                        </ConfigProvider>
                    </Flex>
                </Content>
            </Layout>
        </Layout>
    );
};

export default TypeProductPage;
