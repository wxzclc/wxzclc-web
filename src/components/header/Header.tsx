"use client"
import React, { useState } from 'react';
import { SearchOutlined, AppstoreOutlined, NodeIndexOutlined, PushpinOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu } from 'antd';

const Header: React.FC = () => {
  const [current, setCurrent] = useState('navi');
  const [theme, setTheme] = useState<MenuTheme>('light');

  const items: MenuProps['items'] = [
    {
      label: (
        <a href="/" target="_self">
          导航
        </a>
      ),
      key: 'navi',
      icon: <AppstoreOutlined />,
    },
    {
      label: (
        <a href="/search" target="_self">
          搜索
        </a>
      ),
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
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  return <Menu
    onClick={onClick}
    selectedKeys={[current]}
    mode="horizontal"
    items={items}
    theme={theme} />;
};

export default Header;