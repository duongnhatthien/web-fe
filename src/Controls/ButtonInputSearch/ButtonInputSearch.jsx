import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { WrapperSearch } from '../../Controls/ButtonInputSearch/style';
const Search = Input;
function ButtonInputSearch(props) {
    const {size, placeholder,buttonType, textButton} = props;
    return (
        <WrapperSearch>
            <Search
                placeholder={placeholder}
                allowClear
                prefix={<SearchOutlined />}
                size={size}
            />
            <Button type={buttonType} size={size}>
                {textButton}
            </Button>
        </WrapperSearch>
    );
}

export default ButtonInputSearch;
