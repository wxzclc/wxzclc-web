"use client"
import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import NaviItem from './NaviItem';
import AmapWeather from '../amapWeather/amapWeather';
import { displayNaviGroupStyle } from '@/app/css/CSSProperties';
import { NaviGroup as NaviGroupType } from '@/config/config';

interface naviGroupProps {
  naviGroup: NaviGroupType,
  newWorldFlg: boolean
}

const NaviGroup: React.FC<naviGroupProps> = (props) => {
  const getNoDisplayNaviGroup = () => {
    return (
        <AmapWeather />
    )
  }
  return (
    <>
      {props.naviGroup.display === false ?
        getNoDisplayNaviGroup()
        :
        <div style={displayNaviGroupStyle}>
          <Space wrap={true} size='middle'>
            {
              props.naviGroup.naviContent.map((item) => {
                return (
                  (props.newWorldFlg || item.newWorldFlg == false) ?
                    <NaviItem key={item.key} naviItem={item}/>
                    :
                    ''
                )
              })
            }
          </Space>
        </div>
      }
    </>
  )
}

export default NaviGroup;