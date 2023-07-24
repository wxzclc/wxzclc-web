import React from 'react';
import type { MenuProps } from 'antd';
import {Switch} from 'antd';
import { SearchOutlined, AppstoreOutlined, NodeIndexOutlined, PushpinOutlined, GithubOutlined, ManOutlined, ContainerOutlined } from '@ant-design/icons';
import { HeaderMenuItemStyle } from '@/app/css/CSSProperties';

export const headerItems = (newWorldFlg: boolean, onChangeMode: ()=> void): MenuProps['items'] => {
  return (
    [
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
      {
        label: (
          <Switch
            checked={newWorldFlg}
            onChange={onChangeMode}
            checkedChildren="高速挡"
            unCheckedChildren="低速挡"
          />
        ),
        key: 'changeTheme',
        disabled: true,
      },
    ]
  )
}

// export const headerItems: MenuProps['items'] = [
//   {
//     label: '导航',
//     key: 'navi',
//     icon: <AppstoreOutlined />,
//   },
//   {
//     label: '搜索',
//     key: 'search',
//     icon: <SearchOutlined />,
//   },
//   {
//     label: '友情链接',
//     key: 'SubMenu',
//     icon: <NodeIndexOutlined />,
//     children: [
//       {
//         type: 'group',
//         label: (
//           <><ContainerOutlined /> blog</>
//         ),
//         children: [
//           {
//             label: (
//               <a href='https://readm.tech/' target="_blank">
//                 Readm的个人博客
//               </a>
//             ),
//             key: 'setting:1',
//             icon: (<ManOutlined /> ),
//             style: HeaderMenuItemStyle
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: 'WIP',
//     key: 'wip',
//     icon: <PushpinOutlined />,
//     disabled: true,
//   },
//   {
//     label: (
//       <a href="https://github.com/wxzclc/wxzclc-web" target="_blank" rel="noopener noreferrer">
//         github
//       </a>
//     ),
//     key: 'github',
//     icon: <GithubOutlined />,
//   },
//   // {
//   //   label: (
//   //     <Switch
//   //       checked={theme === 'dark'}
//   //       onChange={changeTheme}
//   //       checkedChildren="Dark"
//   //       unCheckedChildren="Light"
//   //     />
//   //   ),
//   //   key: 'changeTheme',
//   //   icon: <PushpinOutlined />,
//   //   disabled: true,
//   // },
// ];