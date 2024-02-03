import React from 'react';
import { Card, Rate } from 'antd';
import Product1 from '../../Images/Product/product_1.webp';
import CardFooterImg from '../../Images/cardFooter.png';
import {
    BarsOutlined,
    StarFilled,
} from '@ant-design/icons';
import {
    WrapperInfoCard,
    TruncatedH3,
    CardProduct,
    Rating,
    PriceDiscount,
    CardFooter,
} from './style';
import Badges from '../../Images/badges.png';

const CardComponent = () => {
    return (
        <CardProduct
            hoverable
            bodyStyle={{ padding: '0px' }}
            cover={<img src={Product1} />}>
            <WrapperInfoCard>
                <div>
                    <img
                        src={Badges}
                        style={{ width: '89px', height: '20px' }}
                    />
                </div>
                <div>
                    <TruncatedH3>
                        Bộ đầu nối vòi rửa bát tăng áp nối dài thân mềm 3 chế độ
                        phun Hobby Home Decor VSTADAY kèm đầu chuyển ren
                    </TruncatedH3>
                </div>
                <Rate allowHalf defaultValue={5} />
                <PriceDiscount>
                    <span>85.000</span>
                    <sup
                        style={{
                            fontSize: '75%',
                            lineHeight: 0,
                            position: 'relative',
                            VerticalAlignTopOutlined: BarsOutlined,
                        }}>
                        ₫
                    </sup>
                </PriceDiscount>
            </WrapperInfoCard>
            <CardFooter>
                <img
                    src={CardFooterImg}
                />
                <span>Giao siêu tốc 2h</span>
            </CardFooter>
        </CardProduct>
    );
};

export default CardComponent;
