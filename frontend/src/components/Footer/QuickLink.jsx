import React from 'react'
import Item from './Item'

const QuickLink = () => {
  return (
    <div>
        <h1 className='quick-link'>QuickLink</h1>
        <div>
            <Item fontSize={'18px'} fontColor={'#3D3D3D'} fontFamily={'GilroyRegular-☞, sans-serif'}>Home</Item>
            <Item fontSize={'18px'} fontColor={'#3D3D3D'} fontFamily={'GilroyRegular-☞, sans-serif'}>About us</Item>
            <Item fontSize={'18px'} fontColor={'#3D3D3D'} fontFamily={'GilroyRegular-☞, sans-serif'}>Privacy policy</Item>
            <Item fontSize={'18px'} fontColor={'#3D3D3D'} fontFamily={'GilroyRegular-☞, sans-serif'}>Terms & Conditions</Item>
        </div>
    </div>
  )
}

export default QuickLink