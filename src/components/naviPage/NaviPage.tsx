"use client"
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import NaviGroup from './NaviGroup';
import './css/navi.css'

import { NaviGroup as NaviGroupType, naviList } from '@/config/config';

interface NaviProps {
  newWorldFlg: boolean
}

const NaviPage: React.FC<NaviProps> = (props) => {
  const [naviGroups, setNaviGroups] = useState(Array<NaviGroupType>);

  const getNaviGroups = () => {
    const groups = [];
    for (let i = 0; i < 9; i++) {
      const naviGroup = naviList.filter((item)=> {
        return (item.sort === i && (props.newWorldFlg || item.newWorldFlg == false))
      });
      if(naviGroup.length > 0) {
        groups.push(naviGroup[0])
      }
    }
    return groups;
  }

  useEffect(() => {
    const naviGroups = getNaviGroups();
    if (naviGroups.length > 0) {
      setNaviGroups(naviGroups);
    }
  }, [props.newWorldFlg])

  return (
    <>
      <div className='navi-content'>
        <Row gutter={[32, 32]}>
          {
            naviGroups.map((item)=> {
              return (
                <Col key={item.sort} span={8}><NaviGroup naviGroup={item} newWorldFlg={props.newWorldFlg}/></Col>
              )
            })
          }
        </Row>
      </div>
    </>
  )
}

export default NaviPage;