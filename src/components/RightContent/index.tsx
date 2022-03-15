import { Menu, Dropdown, Spin } from 'antd';
import { useModel, history } from 'umi'
import { useCallback } from 'react'
import { stringify } from 'querystring';
import './index.less'
const RightContent: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const loading = (
    <span >
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );
  if (!initialState) {
    return loading;
  }
  const { currentUser } = initialState

  if (!currentUser || !currentUser.name) {
    return loading;
  }

  /**
 * 退出登录，并且将当前的 url 保存
 */
  const loginOut = async () => {

    const { query = {}, search, pathname } = history.location;
    const { redirect } = query;
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/login' && !redirect) {
      sessionStorage.removeItem('token')
      history.replace({
        pathname: '/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };

  const onMenuClick = useCallback(
    (event: any) => {
      const { key } = event;
      if (key === 'logout') {
        setInitialState((s) => ({ ...s, currentUser: undefined }));
        loginOut();
        return;
      }
    },
    [setInitialState],
  );

  const menuHeaderDropdown = (
    <Menu onClick={onMenuClick}>
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menuHeaderDropdown}>
      <div className='dropDiv'>
        <div><img src={currentUser.avatar} alt="avatar" /></div>
        <div>{currentUser.name}</div>
      </div>
    </Dropdown>
  )
}

export default RightContent
