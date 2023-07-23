"use client"
import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const NaviPage: React.FC = () => {
  const loadingStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.88)',
    fontSize: '2em',
    textAlign: 'center',
    paddingTop: '35vh',
  };

  return (
    <>
      <div style={loadingStyle}>
        <LoadingOutlined /> 施工中...
      </div>
    </>
  )
}

export default NaviPage;