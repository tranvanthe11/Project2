
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import {
    StarFilled
  } from '@ant-design/icons';
  import logo from '../../assets/images/logo.png'

const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        headStyle={{ width: '200px', height: '200px' }}
        style={{ width: 200 }}
        bodyStyle={{ padding: '10px' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <img src={logo}
            style={{ width: '68px', height: '14px', position: 'absolute', top: -1, left: -1, norderTopLeftRadius: '3px' }} 
        />
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span style={{ marginRight: '4px'}}>
                <span>4.5</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }}/>
            </span>
            <span>| Da ban 100+</span>
        </WrapperReportText>
        <WrapperPriceText>
            10.000.000d
            <WrapperDiscountText>
                -20%
            </WrapperDiscountText>
        </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent