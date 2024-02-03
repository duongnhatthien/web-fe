import React from 'react';
import TypeProductComponent from '../../components/TypeProduct/TypeProductComponent';
import {
    WrapperTypeProduct,
    WrapperHomeContainer,
    WrapperNavbar,
    WrapperHomeContent,
    WrapperProductGrid,
    WrapperHomeGrid,
    ButtonViewMore,
} from './style';
import SliderComponent from '../../components/Slider/SliderComponent';
import CardComponent from '../../components/Card/CardComponent';
import NavbarComponent from '../../components/Navbar/NavbarComponent';
import slider1 from '../../Images/Slides/slide_1.jpg';
import slider2 from '../../Images/Slides/slide_2.jpg';
import slider3 from '../../Images/Slides/slide_3.jpg';
import slider4 from '../../Images/Slides/slide_4.jpg';
import { Flex } from 'antd';
const HomePage = () => {
    const typeProduct = ['TV', 'Tủ lạnh', 'Máy giặt', 'Điện thoại', 'Máy tính'];
    return (
        <div style={{ width: '1440px', padding: '0px 24px', margin: '0px  ' }}>
            <WrapperTypeProduct>
                {typeProduct.map((product) => {
                    return (
                        <TypeProductComponent name={product} key={product} />
                    );
                })}
            </WrapperTypeProduct>
            <WrapperHomeContainer>
                <WrapperNavbar>
                    <NavbarComponent />
                </WrapperNavbar>
                <WrapperHomeContent>
                    <SliderComponent
                        arrImage={[slider1, slider2, slider3, slider4]}
                    />
                    <WrapperProductGrid>
                        <WrapperHomeGrid>
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </WrapperHomeGrid>
                        <Flex justify="center">
                            <ButtonViewMore>Xem Thêm</ButtonViewMore>
                        </Flex>
                    </WrapperProductGrid>
                </WrapperHomeContent>
            </WrapperHomeContainer>
        </div>
    );
};

export default HomePage;
