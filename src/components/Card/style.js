import { Card } from 'antd';
import styled from 'styled-components';
export const WrapperInfoCard = styled.div`
    padding: 8px;
    display: flex !important;
    flex-direction: column;
    gap: 4px;
    flex: 1 1 0%;
    box-sizing: border-box;
`;
export const CardProduct = styled(Card)`
    margin-inline-start: 0;
    width: 176.333px;
    border: 1px solid rgb(235, 235, 240);
    & > .ant-card-cover {
        border: 1px solid rgb(235, 235, 240);
    }
`;
export const TruncatedH3 = styled.h3`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: break-spaces;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgb(39, 39, 42);
    margin: 0px;
    word-break: break-word;
    width: 100%;
`;
export const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: rgb(255, 196, 0);
    font-size: 12px;
`;
export const PriceDiscount = styled.div`
    text-align: left;
    font-size: 16px;
    line-height: 150%;
    font-weight: 500;
    color: rgb(39, 39, 42);
    margin: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
export const CardFooter = styled.div`
    display: flex;
    gap: 4px;
    border-top: 1px solid rgb(235, 235, 240);
    padding: 8px;
    -webkit-box-align: center;
    align-items: center;
    & > span {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: rgb(128, 128, 137);
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        white-space: normal;
    }
    & > img{
        width: 32px;
        height: 16px; 
    }
`;
