"use client"
import React, { useState } from 'react';
import { SearchOutlined, AppstoreOutlined, NodeIndexOutlined, PushpinOutlined, GithubOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import SearchPage from '@/components/searchPage/SearchPage';
import NaviPage from '@/components/naviPage/NaviPage';
import { HeaderStyle } from './css/CSSProperties';
import './css/home.css'

export default function Home() {
  const [current, setCurrent] = useState('navi');
  const [theme, setTheme] = useState<MenuTheme>('light');

  const onClick: MenuProps['onClick'] = (e) => {
    if (['navi', 'search'].includes(e.key)) {
      setCurrent(e.key);
    }
  };

  // const changeTheme = (value: boolean) => {
  //   setTheme(value ? 'dark' : 'light');
  // };

  const items: MenuProps['items'] = [
    {
      label: '导航',
      key: 'navi',
      icon: <AppstoreOutlined />,
    },
    {
      label: '搜索',
      key: 'search',
      icon: <SearchOutlined />,
    },
    {
      label: '友情链接',
      key: 'SubMenu',
      icon: <NodeIndexOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: 'WIP',
      key: 'wip',
      icon: <PushpinOutlined />,
      disabled: true,
    },
    {
      label: (
        <a href="https://github.com/wxzclc/wxzclc-web" target="_blank" rel="noopener noreferrer">
          github
        </a>
      ),
      key: 'github',
      icon: <GithubOutlined />,
    },
    // {
    //   label: (
    //     <Switch
    //       checked={theme === 'dark'}
    //       onChange={changeTheme}
    //       checkedChildren="Dark"
    //       unCheckedChildren="Light"
    //     />
    //   ),
    //   key: 'changeTheme',
    //   icon: <PushpinOutlined />,
    //   disabled: true,
    // },
  ];

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        theme={theme}
        style={HeaderStyle} />
      {/* <Background>
        { current === 'navi' && <NaviPage />}
        { current === 'search' && <SearchPage />}
      </Background> */}
      <div className='page-background'>
        {current === 'navi' && <NaviPage />}
        {current === 'search' && <SearchPage />}
      </div>
    </>
  )
}
