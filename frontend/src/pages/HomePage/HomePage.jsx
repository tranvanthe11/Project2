import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import anh1 from '../../assets/images/anh1.webp'
import anh2 from '../../assets/images/anh2.webp'
import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
    const arr = ['TV', 'Tu lanh', 'Laptop']
  return (
    <>
    <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
            {arr.map((item) => {
                return(
                    <TypeProduct name={item} key={item}/>
                )
            })}

        </WrapperTypeProduct>
    </div>
    <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px'}}>
        <SliderComponent arrImages={[ anh1, anh2 ]}/>
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px'}}>
            <CardComponent/>
        </div>
    </div>
    </>
  )
}

export default HomePage