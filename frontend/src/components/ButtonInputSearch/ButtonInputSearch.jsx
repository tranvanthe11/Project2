import { Button } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const { 
        size, placeholder, textButton,
        bordered,
        backgroundColorInput = '#fff', 
        backgroundColorButton = '#FF8800', 
        colorButton = '#fff'
    } = props
  return (
    <div style={{ display:'flex' }}>
        <InputComponent 
            size={size} 
            placeholder={placeholder} 
            bordered={bordered} 
            style={{ backgroundColor: backgroundColorInput }}
        />
        <ButtonComponent
            size={size} 
            style={{ background: backgroundColorButton, border: !bordered && 'none'}} 
            icon={<SearchOutlined style={{ color: colorButton }} color={colorButton}/>}
            textButton={textButton}
            styleTextButton={{ color: colorButton}}
        />
    </div>
  )
}

export default ButtonInputSearch