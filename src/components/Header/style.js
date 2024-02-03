import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Flex, Row, Space } from 'antd';
import styled from 'styled-components';
export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background: #fff;
`;
export const WrapperLogoHeader = styled.img`
    width: 72px;
    height: 72px;
`;
export const WrapperHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;
`;
export const ModalStyles = {
    content: {
        paddingLeft: '40px',
        paddingRight: '0px',
        background: 'rgb(255, 255, 255)',
        width: '800px',
    },
};
export const InputSignUp = styled.div`
    position: relative;
    z-index: 99;
    &::before {
        content: '';
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        border-bottom: 1px solid rgb(224, 224, 224);
    }
    & > input {
        width: 100%;
        padding: 10px 0px;
        border: none;
        font-size: 24px;
        color: rgb(36, 36, 36);
        outline: none;
    }
`;
export const ButtonSubmit = styled(Button)`
    margin: 15px 0px 10px;
    outline: none;
    border-radius: 4px;
    background: rgb(255, 66, 78);
    padding: 13px 0px;
    width: 100%;
    height: 50px;
    line-height: 1;
    color: rgb(255, 255, 255);
    border: none;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
        color: rgb(255, 255, 255) !important;
    }
`;
export const FooterFormSignUp = styled.div`
    text-align: center;
    margin: 8px 0px 0px;
`;
export const SocialHeading = styled.p`
    margin: 0px 0px 15px;
    position: relative;
    &::before {
        content: '';
        width: 100%;
        height: 1px;
        background: rgb(242, 242, 242);
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
    }
    & > span {
        font-size: 15px;
        color: rgb(120, 120, 120);
        display: inline-block;
        background: rgb(255, 255, 255);
        padding: 0px 20px;
        position: relative;
        z-index: 2;
    }
`;
export const SocialItems = styled(Flex)`
    padding: 0px;
    margin: 0px 0px 10px;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    & > span {
        margin: 0px 10px;
        & > img {
            width: 58px;
            cursor: pointer;
        }
    }
`;
export const SologantRightForm = styled.div`
    margin: 30px 0px 0px;
    text-align: center;
    & > h4 {
        margin: 0px 0px 5px;
        color: rgb(11, 116, 229);
        font-size: 17px;
        font-weight: 500;
    }
    & > span {
        font-size: 13px;
        color: rgb(11, 116, 229);
        font-weight: 500;
    }
`;
