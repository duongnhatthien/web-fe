import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Flex, Menu } from 'antd';
import {
    ModalStyles,
    WrapperHeader,
    WrapperHeaderRight,
    WrapperLogoHeader,
    SologantRightForm,
} from './style';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Logo from '../../Images/logo.png';
import ButtonInputSearch from '../../Controls/ButtonInputSearch/ButtonInputSearch';
import FrmLoginComponent from '../Form/frmLoginComponent';
import FrmRegisterComponent from '../Form/frmRegisterComponent';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/Slide/userReducer';
const HeaderComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormSignUpOpen, setIsFormSigUpOpen] = useState(false);
    const CurrentUser = useSelector(selectCurrentUser);
    useEffect(() => {
        console.log('CurrentUser: ', CurrentUser);
    }, [CurrentUser]);
    const showModal = () => {
        setIsModalOpen(true);
        setIsFormSigUpOpen(false);
    };
    const items = [
        {
            label: CurrentUser.name,
            key: 'AccountMenu',
            icon: <UserOutlined />,
            children: [
                {
                    type: 'sub',
                    label: 'Thông tin tài khoản',
                    key: 'detailUser',
                },
                {
                    type: 'sub',
                    label: 'Đăng xuất',
                    key: 'logOutUser',
                },
            ],
        },
    ];
    const [currentAccountMenu, setCurrentAccountMenu] = useState('');

    const onClickSelectedAccount = (e) => {
        console.log('click ', e);
        setCurrentAccountMenu(e.key);
    };
    return (
        <>
            <WrapperHeader gutter={10} style={{ margin: '0px' }}>
                <Col span={6}>
                    <WrapperLogoHeader src={Logo} />
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                        size="large"
                        textButton="Tìm kiếm"
                        placeholder="Tìm kiếm tại đây ..."
                        buttonType="primary"
                    />
                </Col>
                <Col span={6}>
                    <WrapperHeaderRight>
                        {CurrentUser.name !== '' ? (
                            <Menu
                                onClick={onClickSelectedAccount}
                                selectedKeys={[currentAccountMenu]}
                                mode="horizontal"
                                items={items}
                            />
                        ) : (
                            <Button
                                onClick={showModal} // Chỉ hiển thị modal khi CurrentUser.name rỗng
                                type="text"
                                icon={<UserOutlined />}
                                style={{
                                    fontSize: '16px',
                                    padding: '8px 16px',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '40px',
                                    color: 'rgb(128, 128, 137)',
                                    maxWidth: '140px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>
                                Tài khoản
                            </Button>
                        )}
                        <Modal
                            title={
                                <>
                                    <h4
                                        style={{
                                            margin: 0,
                                            fontSize: '24px',
                                            fontWeight: '500',
                                        }}>
                                        Xin chào,
                                    </h4>
                                    <p
                                        style={{
                                            margin: '0px',
                                            fontSize: '15px',
                                            fontWeight: '400',
                                        }}>
                                        Đăng nhập hoặc Tạo tài khoản
                                    </p>
                                </>
                            }
                            style={{
                                position: 'absolute',
                                left: '40%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                            centered={true}
                            open={isModalOpen}
                            onCancel={() => setIsModalOpen(false)}
                            footer={null}
                            styles={ModalStyles}>
                            <Flex>
                                <Flex
                                    style={{ width: '410px' }}
                                    vertical={true}>
                                    {isFormSignUpOpen !== true ? (
                                        <FrmLoginComponent
                                            setIsModalOpen={setIsModalOpen}
                                            setIsFormSigUpOpen={
                                                setIsFormSigUpOpen
                                            }
                                        />
                                    ) : (
                                        <FrmRegisterComponent
                                            setIsModalOpen={setIsModalOpen}
                                            setIsFormSigUpOpen={
                                                setIsFormSigUpOpen
                                            }
                                        />
                                    )}
                                </Flex>
                                <Flex
                                    alignItems={'center'}
                                    justify={'center'}
                                    vertical={true}
                                    style={{
                                        flexGrow: '1',
                                        marginBottom: '96px',
                                    }}>
                                    <Flex justify="center" align="center">
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
                                            width="203"
                                        />
                                    </Flex>
                                    <SologantRightForm>
                                        <h4>Mua sắm tại Tiki</h4>
                                        <span>Siêu ưu đãi mỗi ngày</span>
                                    </SologantRightForm>
                                </Flex>
                            </Flex>
                        </Modal>
                        <Button
                            type="text"
                            icon={<ShoppingCartOutlined />}
                            style={{
                                fontSize: '16px',
                                padding: '8px 16px',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                height: '40px',
                                color: 'rgb(128, 128, 137)',
                            }}>
                            Giỏ Hàng
                        </Button>
                    </WrapperHeaderRight>
                </Col>
            </WrapperHeader>
        </>
    );
};

export default HeaderComponent;
