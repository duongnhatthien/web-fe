import { Button, Flex } from 'antd';
import styled from 'styled-components';

export const ButtonArrowSlide = styled.div`
    outline: none;
    cursor: pointer;
    border: 0;
    transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
    color: #fff;
    height: 30px;
    width: 30px;
    color: rgba(0, 0, 0, 0.2) !important;
    font-size: 30px;
    &::before {
        content: '';
    }
    &:hover {
        color: rgba(0, 0, 0, 0.2) !important;
    }
`;
export const ProductName = styled.div`
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin: 0;
    max-height: 48px;
    max-width: 665px;
    overflow: hidden;
    overflow-wrap: break-word;
    vertical-align: sub;
    & > span {
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
    }
`;
export const MarkName = styled.div`
    font-size: 12px;
    vertical-align: middle;
    border-radius: 2px;
    display: inline-flex;
    margin-right: 10px;
    position: relative;
    transform: translateY(-2px);
    background-color: #ee4d2d;
    color: #fff;
    cursor: default;
    font-weight: 500;
    line-height: 1;
    user-select: none;
    white-space: nowrap;
    padding: 3px 4px;
`;
export const WrapperProductDetailConten = styled(Flex)``;
export const WrapperRatingProductDetailContent = styled(Flex)`
    margin-top: 10px;
`;
export const WrapperProductPrice = styled(Flex)`
    background: #fafafa;
    padding: 15px 20px;
`;
export const WrapperProductInfo = styled(Flex)`
    margin-top: 25px;
`;

