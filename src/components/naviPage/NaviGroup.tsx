"use client"
import React, { useState } from 'react';
import { GlobalOutlined } from '@ant-design/icons';

const tmpStyle: React.CSSProperties = {
  backgroundColor: 'rgba(230,230,250,0.4)',
  height: 'calc((100vh - 62px - 64px - 32px) / 3)',
  width: '100%',
  borderRadius: '5px'
};

const NaviGroup: React.FC = () => {
  return (
    <>
      <div style={tmpStyle}>
        <GlobalOutlined />
      </div>
    </>
  )
}

export default NaviGroup;