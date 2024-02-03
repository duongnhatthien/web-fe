import React from 'react';
import Image1 from '../../Images/Folder/NhaSach.png';
import Image2 from '../../Images/Folder/DienThoai.png';
import Image3 from '../../Images/Folder/DoChoi.png';
import Image4 from '../../Images/Folder/NhaCua.png';
import Image5 from '../../Images/Folder/TaiNghe.png'
import Image6 from '../../Images/Folder/VayXanh.png';
import { WrapperMenu } from './style';

const NavbarComponent = () => {
    return (
        <WrapperMenu>
            <div id="MenuItem">
                <div id="title">Danh mục</div>
                <a href="#">
                    <div id="picture">
                        <img src={Image1} />
                    </div>
                    <div id="name">Nhà Sách Tiki</div>
                </a>
                <a href="#">
                    <div id="picture">
                        <img src={Image2} />
                    </div>
                    <div id="name">Điện Thoại Máy Tính Bảng</div>
                </a>
                <a href="#">
                    <div id="picture">
                        <img src={Image3} />
                    </div>
                    <div id="name">Đồ Chơi - Mẹ & Bé</div>
                </a>
                <a href="#">
                    <div id="picture">
                        <img src={Image4} />
                    </div>
                    <div id="name">Nhà Cửa - Đời Sống</div>
                </a>
                <a href="#">
                    <div id="picture">
                        <img src={Image6} />
                    </div>
                    <div id="name">Thời Trang Nữ</div>
                </a>
                <a href="#">
                    <div id="picture">
                        <img src={Image5} />
                    </div>
                    <div id="name">Thiết Bị Số - Phụ Kiện Số</div>
                </a>
            </div>
        </WrapperMenu>
    );
};

export default NavbarComponent;
