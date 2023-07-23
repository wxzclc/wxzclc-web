"use client"
import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const tmpStyle: React.CSSProperties = {
  backgroundColor: 'rgba(230,230,250,0.4)',
  height: 'calc((100vh - 62px - 64px - 32px) / 3)',
  width: '100%',
  borderRadius: '5px',
  textAlign: 'center',
  lineHeight: '15em'
};

const NaviGroup: React.FC = () => {
  return (
    <>
      <div style={tmpStyle}>
        <LoadingOutlined /> 施工中...
      </div>
    </>
  )
}

export default NaviGroup;