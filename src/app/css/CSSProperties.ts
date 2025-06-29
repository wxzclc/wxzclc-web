// header
export const HeaderStyle: React.CSSProperties = {
  height: 46,
  background: 'rgba(230,230,250,0.7)',
  color: 'rgba(0,0,0,0.88)',
  borderRadius: '5px'
};

// header menu item
export const HeaderMenuItemStyle: React.CSSProperties = {
  width: 'auto',
};

// 首页临时CSS
export const HomeOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 1,
}

export const HomeCenterboxStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%', 
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

// 搜索组件分割线
export const SearchDividerStyle: React.CSSProperties = {
  color: 'rgba(255,255,240,0.75)',
  borderColor: 'rgba(230,230,250,0.75)',
};

// 搜索组件输入框
export const SearchInputStyle: React.CSSProperties = {
  background: 'rgba(230,230,250,0.7)',
};

// 导航页按钮单元
export const NaviItemStyle: React.CSSProperties = {
  textAlign: 'center',
  cursor: 'pointer'
};

// 导航页按钮
export const NaviButtonStyle: React.CSSProperties = {
  height: '3em',
  width: '3em',
  padding: 0,
};

// 导航页按钮
export const NaviButtonPStyle: React.CSSProperties = {
  width: '4em',
  maxHeight: '1.5em',
  overflow: 'revert',
  margin: 0,
};

// 不显示项目的导航组(天气加载中)
export const unDisplayNaviGroupStyle: React.CSSProperties = {
  backgroundColor: 'rgba(230,230,250,0.4)',
  height: 'calc((100vh - 62px - 64px - 32px) / 3)',
  width: '100%',
  borderRadius: '5px',
  textAlign: 'center',
  lineHeight: '15em'
};

// 不显示项目的导航组(天气显示)
export const weatherNaviGroupStyle: React.CSSProperties = {
  backgroundColor: 'rgba(230,230,250,0.4)',
  height: 'calc((100vh - 62px - 64px - 32px) / 3)',
  width: '100%',
  borderRadius: '5px',
};

// 显示项目的导航组
export const displayNaviGroupStyle: React.CSSProperties = {
  backgroundColor: 'rgba(230,230,250,0.4)',
  height: 'calc((100vh - 62px - 64px - 32px) / 3 - 32px)',
  borderRadius: '5px',
  padding: '16px',
  overflow: 'hidden'
};