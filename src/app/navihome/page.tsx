"use client"
import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, notification, Popconfirm } from 'antd';
import { EyeInvisibleOutlined, AlertOutlined, KeyOutlined } from '@ant-design/icons';
import SearchPage from '@/components/searchPage/SearchPage';
import NaviPage from '@/components/naviPage/NaviPage';
import { headerItems } from '@/components/header/headerList';
import { HeaderStyle } from '../css/CSSProperties';
import '../css/home.css'

export default function Home() {
  const [current, setCurrent] = useState('navi');
  const [theme, setTheme] = useState<MenuTheme>('light');
  const [size, setSize] = useState([0, 0]);
  const [newWorldFlg, setNewWorldFlg] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const newWorldStepRef = useRef(0);
  const newWorldTimerIdRef = useRef(0);
  const waitCloseNewWorldRef = useRef(false);

  const openNewWorldKeyList = process.env.NEXT_PUBLIC_NEW_WORLD_KEY ? process.env.NEXT_PUBLIC_NEW_WORLD_KEY.split(',') : [];
  const newWorldLocalKey = process.env.NEXT_PUBLIC_NEW_WORLD_LOCAL_KEY ? process.env.NEXT_PUBLIC_NEW_WORLD_LOCAL_KEY : '';
  const newWorldLocalExpiredKey = process.env.NEXT_PUBLIC_NEW_WORLD_LOCAL_EXPIRED_KEY ? process.env.NEXT_PUBLIC_NEW_WORLD_LOCAL_EXPIRED_KEY : '';
  const newWorldLocalDuing = process.env.NEXT_PUBLIC_NEW_WORLD_LOCAL_DURING ? Number(process.env.NEXT_PUBLIC_NEW_WORLD_LOCAL_DURING) : 0;

  const onClick: MenuProps['onClick'] = (e) => {
    if (['navi', 'search'].includes(e.key)) {
      setCurrent(e.key);
    }
  };

  // 档位判定
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
            // local storage保存
            if (newWorldLocalKey && newWorldLocalExpiredKey && newWorldLocalDuing > 0){              
              const expirdDate = new Date().setDate(new Date().getDate() + newWorldLocalDuing);
              localStorage.setItem(newWorldLocalKey, 'true');
              localStorage.setItem(newWorldLocalExpiredKey, expirdDate.toString());
            }
            
            document.removeEventListener('keydown', handleKeyDown, false);
            api.open({
              message: '姿势正确',
              description:
                '新世界的大门已开启。',
              icon: <KeyOutlined style={{ color: '#2e8b57' }} />,
            });
            // 重置判定
            newWorldStepRef.current = 0;
            newWorldTimerIdRef.current = 0;
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
  };

  const onChangeMode = () => {
    if (!newWorldFlg) {
      api.open({
        message: '姿势错误',
        description:
          '打开方式不正确。',
        icon: <EyeInvisibleOutlined style={{ color: '#b22222' }} />,
      });
    } else if (newWorldFlg && !waitCloseNewWorldRef.current){
      waitCloseNewWorldRef.current = true;
      api.open({
        message: '确认是否关闭',
        description:
          '如需关闭，请再次点击开关。',
        icon: <AlertOutlined style={{ color: '#ffd700' }} />,
      });
      setTimeout(() => {
        waitCloseNewWorldRef.current = false;
      }, 3000)
    } else {
      setNewWorldFlg(false);
      // local storage保存
      if (newWorldLocalKey && newWorldLocalExpiredKey && newWorldLocalDuing > 0){              
        const expirdDate = Date.now();
        localStorage.setItem(newWorldLocalKey, 'false');
        localStorage.setItem(newWorldLocalExpiredKey, expirdDate.toString());
      }
      waitCloseNewWorldRef.current = false;
    }
  }

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // 添加/删除监听键盘输入
  useEffect(() => {
    if (!newWorldFlg && openNewWorldKeyList.length > 0) {
      document.addEventListener('keydown', handleKeyDown, false)
      return () => {
        document.removeEventListener('keydown', handleKeyDown, false)
      }
    }
  }, [newWorldFlg])

  // 根据local storage设置newWorldFlg
  useEffect(() => {
    if (newWorldLocalKey && newWorldLocalExpiredKey){     
      const localStorageNewWorldFlg = localStorage.getItem(newWorldLocalKey);
      const newWorldLocalExpired = Number(localStorage.getItem(newWorldLocalExpiredKey));
      if (localStorageNewWorldFlg) {
        const newWorldFlgFromLocalStorage = JSON.parse(localStorageNewWorldFlg);
        if (newWorldFlgFromLocalStorage === true && Date.now() < newWorldLocalExpired) {
          setNewWorldFlg(true);
        }
      }
    }
  }, [])

  return (
    <>
      {contextHolder}
      <Menu
        className={size[0] > 1600 ? 'header-large-width' : ''}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={headerItems(newWorldFlg, onChangeMode)}
        theme={theme}
        style={HeaderStyle} />
      <div className='page-background'>
        {current === 'navi' && <NaviPage newWorldFlg={newWorldFlg} />}
        {current === 'search' && <SearchPage newWorldFlg={newWorldFlg} />}
      </div>
    </>
  )
}
