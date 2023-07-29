"use client"
import React, { useCallback, useState } from 'react';
import { Button, Image } from 'antd';
import { NaviItemStyle, NaviButtonStyle, NaviButtonPStyle } from '@/app/css/CSSProperties';
import { NaviItem as NaviItemType } from '@/config/config';
import Item from 'antd/es/list/Item';

interface naviItemProps {
  naviItem: NaviItemType,
  newWorldFlg?: boolean
}

const NaviItem: React.FC<naviItemProps> = (props) => {
  const handleClick = (navi_url: string) => {
    window.open(navi_url, '_blank');
  }
  return (
    <div style={NaviItemStyle} onClick={() => handleClick(props.naviItem.url)}>
      <Button type='text' style={NaviButtonStyle}  icon={
        <img src={props.naviItem.icon} style={{width: '3em', height: '3em'}}></img>
      }>
      </Button>
      <p style={NaviButtonPStyle}>{props.naviItem.title}</p>
    </div>
  )
}

export default NaviItem;