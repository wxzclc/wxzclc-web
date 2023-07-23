"use client"
import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import NaviGroup from './NaviGroup';
import './css/navi.css'

interface NaviProps {
  newWorldFlg: boolean
}

const NaviPage: React.FC<NaviProps> = (props) => {
  const loadingStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.88)',
    fontSize: '2em',
    textAlign: 'center',
    paddingTop: '35vh',
  };

  return (
    <>
      <div className='navi-content'>
        <Row gutter={[32, 32]}>
          <Col span={8}><NaviGroup /></Col>
          <Col span={8}><NaviGroup /></Col>
          <Col span={8}><NaviGroup /></Col>

          <Col span={8}><NaviGroup /></Col>
          <Col span={8}><NaviGroup /></Col>
          <Col span={8}><NaviGroup /></Col>

          {props.newWorldFlg? 
          <>
          <Col span={8}><NaviGroup /></Col>
          <Col span={8}><NaviGroup /></Col>
          <Col span={8}><NaviGroup /></Col>
          </>
          : ''
          }
        </Row>
      </div>
    </>
  )
}

export default NaviPage;