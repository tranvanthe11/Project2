import { Col } from 'antd'
import React from 'react'
import {WrapperHeader, WrapperTextHeader, WrapperTextHeaderAccout, WrapperTextHeaderSmall} from './style'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
      <Col span={6}>
        <WrapperTextHeader>GruStore</WrapperTextHeader>
      </Col>
      <Col span={12}>
      <ButtonInputSearch
        size="large"
        bordered={false}
        textButton="Tìm kiếm"
        placeholder="Tìm kiếm sản phẩm"
        // onSearch={onSearch}
      />
      </Col>
      <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
      <WrapperTextHeaderAccout>
          <UserOutlined style={{ fontSize: '30px' }}/>
        <div>
          <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
          <div>
            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
            <CaretDownOutlined />
          </div>
        </div>
      </WrapperTextHeaderAccout>
      <div>
          <ShoppingCartOutlined style={{ fontSize: '30px' , color: '#fff'}} />
          <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
      </div>
      </Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent