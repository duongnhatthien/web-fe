import styled from 'styled-components';

export const WrapperMenu = styled.div`
    font-family: 'Poppins', sans-serif;
    position: relative;
    display: flex;
    margin-bottom: 16px;
    padding: 12px 8px;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    width: 230px;
    & > #MenuItem {
        & > #title {
            margin-bottom: 8px;
            padding-left: 16px;
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            color: rgb(39, 39, 42);
        }
        & > a {
            display: flex;
            color: rgb(56, 56, 61);
            padding: 7px 16px;
            -webkit-box-align: center;
            align-items: center;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease 0s;
            text-decoration: none;
            & > #picture {
                flex: 0 0 32px;
                height: 32px;
                margin-right: 8px;
                line-height: 0;
                & > img {
                    width: 32px;
                    height: 32px;
                }
            }
            & > #name {
                display: flex;
                gap: 4px;
                -webkit-box-align: center;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: rgb(39, 39, 42);
            }
            &:hover {
                background: rgba(39, 39, 42, 0.12);
            }
        }
    }
`;
