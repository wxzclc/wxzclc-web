"use client"
import React from 'react';
import { Empty } from 'antd';
import { HomeOverlayStyle, HomeCenterboxStyle } from './css/CSSProperties';
import './css/home.css'

export default function Home() {
  return (
    <>
    <div style={HomeOverlayStyle}>
      <div style={HomeCenterboxStyle}>
        <Empty description={<span style={{ color: 'rgba(255,255,240,0.75)' }}>No Data...</span>} />
      </div>
    </div>
    </>
  )
}
