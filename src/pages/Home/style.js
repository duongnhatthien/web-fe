import styled from 'styled-components';
export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: flex-start;
    height: 44px;
`;
export const WrapperHomeContainer = styled.div`
    padding-top: 16px;
    display: flex;
    gap: 24px;
`;
export const WrapperNavbar = styled.div`
    max-height: 100vh;
    position: sticky;
    top: 16px;
    background-color: transparent;
    display: flex;
    padding-bottom: 117px;
    flex-direction: column;
    color: rgb(56, 56, 61);
    font-size: 14px;
    line-height: 20px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;
export const WrapperHomeContent = styled.div`
    width: calc(100% - 254px);
    overflow-x: hidden;
    gap: 16px;
    display: flex;
    flex-direction: column;
`;
export const WrapperProductGrid = styled.div`
    padding-block: 16px;
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255);
    gap: 12px;
    border-radius: 8px;
`;
export const WrapperHomeGrid = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    transition: all 0.5s ease-in-out 0s;
    max-width: 100%;
    padding-inline: 16px;
    gap: 8px;
`;
export const ButtonViewMore = styled.div`
    cursor: pointer;
    display: inline-block;
    width: 240px;
    margin: auto;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid rgb(10, 104, 255);
    color: rgb(10, 104, 255);
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    &:hover{
        background-color: rgba(0, 96, 255, 0.12);
    }
`;
