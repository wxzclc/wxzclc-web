"use client"
import React from 'react';
import { Button } from 'antd';
import { NaviItemStyle, NaviButtonStyle, NaviButtonPStyle } from '@/app/css/CSSProperties';
import { NaviItem as NaviItemType } from '@/config/config';

interface naviItemProps {
  naviItem: NaviItemType,
  newWorldFlg?: boolean
}

const NaviItem: React.FC<naviItemProps> = (props) => {
  const mouseDownHandler = ( e: React.MouseEvent, navi_url: string ) => {
    if(e.button === 0 || e.button === 1) {
      window.open(navi_url, '_blank');
    }
  }
  return (
    <div style={NaviItemStyle} onMouseDown={(e) => mouseDownHandler(e, props.naviItem.url)} >
      <Button type='text' style={NaviButtonStyle}  icon={
        <img src={props.naviItem.icon} style={{width: '3em', height: '3em'}}></img>
      }>
      </Button>
      <p style={NaviButtonPStyle}>{props.naviItem.title}</p>
    </div>
  )
}

export default NaviItem;