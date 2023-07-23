"use client"
import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { SearchOutlined, AppstoreOutlined, NodeIndexOutlined, PushpinOutlined, GithubOutlined, ManOutlined, ContainerOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import SearchPage from '@/components/searchPage/SearchPage';
import NaviPage from '@/components/naviPage/NaviPage';
import { HeaderStyle, HeaderMenuItemStyle } from './css/CSSProperties';
import './css/home.css'

export default function Home() {
  const [current, setCurrent] = useState('navi');
  const [theme, setTheme] = useState<MenuTheme>('light');
  const [size, setSize] = useState([0, 0]);
  const [newWorldFlg, setNewWorldFlg] = useState(false);
  const newWorldStepRef = useRef(0);
  const newWorldTimerIdRef = useRef(0);

  const openNewWorldKeyList = process.env.NEXT_PUBLIC_NEW_WORLD_KEY ? process.env.NEXT_PUBLIC_NEW_WORLD_KEY.split(',') : [];

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
          label: (
            <><ContainerOutlined /> blog</>
          ),
          children: [
            {
              label: (
                <a href='https://readm.tech/' target="_blank">
                  Readm的个人博客
                </a>
              ),
              key: 'setting:1',
              icon: (<ManOutlined /> ),
              style: HeaderMenuItemStyle
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

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (openNewWorldKeyList.length > 0) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!newWorldFlg) {
          // 判定未开始，切按键非列表中第一个，直接结束
          if (newWorldStepRef.current === 0 && event.key !== openNewWorldKeyList[0]) {
            return;
          } else {
            if (event.key === openNewWorldKeyList[newWorldStepRef.current]) {
              // 判定步数+1
              newWorldStepRef.current += 1;
              // 判定步数已满，开启
              if (newWorldStepRef.current === openNewWorldKeyList.length) {
                setNewWorldFlg(true);
                document.removeEventListener('keydown', handleKeyDown, false);
                return;
              } else {
                // 继续，取消上一步的计时器
                window.clearTimeout(newWorldTimerIdRef.current);
              }
              // 本步计时器开始
              newWorldTimerIdRef.current = window.setTimeout(() => {
                newWorldStepRef.current = 0;
                newWorldTimerIdRef.current = 0;
              }, 3000);
            } else {
              // 输入错误，结束本次判定
              newWorldStepRef.current = 0;
              newWorldTimerIdRef.current = 0;
              return;
            }
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown, false)

      return () => {
        document.removeEventListener('keydown', handleKeyDown, false)
      }
    }
  }, [])

  return (
    <>
      <Menu
        className={size[0] > 1600 ? 'header-large-width' : ''}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        theme={theme}
        style={HeaderStyle} />
      <div className='page-background'>
        {current === 'navi' && <NaviPage newWorldFlg={newWorldFlg} />}
        {current === 'search' && <SearchPage />}
      </div>
    </>
  )
}
