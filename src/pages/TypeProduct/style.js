import { Breadcrumb } from 'antd';
import styled from 'styled-components';

export const WrapperBreadcrumb = styled(Breadcrumb)`
    width: 1270px;
    height: 40px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
export const NavHeader = styled.h4`
    margin: 0px;
    line-height: 20px;
    display: block;
    color: rgb(56, 56, 61);
    font-size: 14px;
    padding: 8px 0px;
    font-weight: 500;
`;
export const NavRating = styled.div`
    padding: 5px 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    & > p {
        display: inline-block;
        & > .anticon.anticon-star {
            margin-inline-start: 0px;
            font-size: 14px;
        }
    }
    & > span {
        margin-left: 3px;
    }
`;
