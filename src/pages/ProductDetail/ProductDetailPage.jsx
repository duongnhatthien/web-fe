import React from 'react';
import { useState, useEffect } from 'react';
import {
    ButtonArrowSlide,
    MarkName,
    ProductName,
    WrapperProductDetailConten,
    WrapperProductPrice,
    WrapperRatingProductDetailContent,
    WrapperProductInfo,
} from './style';
import Ao1 from '../../Images/ProductDetail/Ao.jpg';
import Ao2 from '../../Images/ProductDetail/Ao1.jpg';
import Ao3 from '../../Images/ProductDetail/Ao2.jpg';
import Slider from 'react-slick';
import {
    Breadcrumb,
    Layout,
    Flex,
    theme,
    Image,
    Rate,
    InputNumber,
    Button,
    Radio,
} from 'antd';
import {
    LeftOutlined,
    RightOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
const { Content } = Layout;
const arrImage = [Ao1, Ao2, Ao3];
const ProductDetailPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: (
            <ButtonArrowSlide>
                <RightOutlined />
            </ButtonArrowSlide>
        ),
        prevArrow: (
            <ButtonArrowSlide>
                <LeftOutlined />
            </ButtonArrowSlide>
        ),
    };

    return (
        <Layout>
            <Content
                style={{
                    padding: '0 48px',
                }}>
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}>
                    <Flex>
                        <div
                            style={{
                                flexShrink: '0',
                                width: '450px',
                            }}>
                            <Slider
                                {...settingsMain}
                                asNavFor={nav2}
                                ref={(slider) => setSlider1(slider)}
                                style={{
                                    width: '100%',
                                    background: '#EBECF0',
                                }}>
                                {arrImage.map((img) => (
                                    <Image src={img}></Image>
                                ))}
                            </Slider>
                            <div style={{ marginTop: '10px' }}>
                                <Slider
                                    style={{
                                        width: '100%',
                                    }}
                                    {...settingsThumbs}
                                    asNavFor={nav1}
                                    ref={(slider) => setSlider2(slider)}>
                                    {arrImage.map((img) => (
                                        <Image
                                            src={img}
                                            preview={false}></Image>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <WrapperProductDetailConten vertical={true}>
                            <ProductName>
                                <MarkName>Yêu thích</MarkName>
                                <span>
                                    Áo Polo Phối Màu Nam Nữ Unisex , Mặc Đi Học
                                    , Đi Chơi
                                </span>
                            </ProductName>
                            <WrapperRatingProductDetailContent>
                                <Flex
                                    gap={'5px'}
                                    style={{ paddingRight: '12px' }}>
                                    <div
                                        style={{
                                            borderBottom: '1px solid #ee4d2d',
                                            color: '#ee4d2d',
                                        }}>
                                        4.3
                                    </div>
                                    <Rate allowHalf defaultValue={2.5} />
                                </Flex>
                                <Flex
                                    style={{
                                        borderLeft:
                                            '1px solid rgba(0,0,0,0.14)',
                                        padding: '0 12px',
                                    }}>
                                    <div
                                        style={{
                                            borderBottom: '1px solid #555',
                                            color: '#222',
                                            fontSize: '16px',
                                            marginRight: '5px',
                                            paddingBottom: '1px',
                                        }}>
                                        5k
                                    </div>
                                    <div
                                        style={{
                                            color: '#767676',
                                            fontSize: '14px',
                                            textTransform: 'capitalize',
                                        }}>
                                        Đánh giá
                                    </div>
                                </Flex>
                                <Flex
                                    style={{
                                        borderLeft:
                                            '1px solid rgba(0,0,0,0.14)',
                                        padding: '0 12px',
                                    }}>
                                    <div>16,8k</div>
                                    <div
                                        style={{
                                            color: '#767676',
                                            fontSize: '14px',
                                            textTransform: 'capitalize',
                                            marginLeft: '5px',
                                        }}>
                                        đã bán
                                    </div>
                                </Flex>
                            </WrapperRatingProductDetailContent>
                            <WrapperProductPrice
                                align="center"
                                style={{ marginTop: '10px' }}>
                                <div
                                    style={{
                                        color: '#929292',
                                        fontSize: '16px',
                                        marginRight: '10px',
                                        textDecorationLine: 'line-through',
                                    }}>
                                    ₫69.000
                                </div>
                                <Flex>
                                    <div
                                        style={{
                                            color: '#ee4d2d',
                                            fontSize: '30px',
                                            fontWeight: 500,
                                        }}>
                                        ₫44.000
                                    </div>
                                    <div
                                        style={{
                                            background: '#ee4d2d',
                                            color: '#fff',
                                            borderRadius: '2px',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            height: '16px',
                                            lineHeight: 1,
                                            marginLeft: '15px',
                                            padding: '2px 4px',
                                            textTransform: 'uppercase',
                                            whiteSpace: 'nowrap',
                                            verticalAlign: 'center',
                                        }}>
                                        36% giảm
                                    </div>
                                </Flex>
                            </WrapperProductPrice>
                            <WrapperProductInfo>
                                <h3
                                    style={{
                                        color: '#757575',
                                        fontWeight: 400,
                                        margin: 0,
                                        textTransform: 'capitalize',
                                        width: '110px',
                                    }}>
                                    Số lượng
                                </h3>
                                <InputNumber min={1} defaultValue={1} />
                            </WrapperProductInfo>
                            <Flex style={{ marginTop: '15px' }}>
                                <Button
                                    type="default"
                                    icon={<ShoppingCartOutlined />}
                                    style={{
                                        height: '48px',
                                        marginRight: '15px'
                                    }}
                                    >
                                    Thêm Vào Giỏ Hàng
                                </Button>
                                <Button type='primary' style={{height: '48px',width: '148px', padding: '0px 20px'}}>Mua Ngay</Button>
                            </Flex>
                        </WrapperProductDetailConten>
                    </Flex>
                </div>
            </Content>
        </Layout>
    );
};

export default ProductDetailPage;
