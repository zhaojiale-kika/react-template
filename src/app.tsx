import { history, RequestConfig } from 'umi'
import type { RunTimeLayoutConfig } from 'umi';
import { ResponseError } from 'umi-request'
import { PageLoading } from '@ant-design/pro-layout';
import { fetchUserInfo } from '@/services/user/index'
import { notification } from 'antd'
import RightContent from '@/components/RightContent';


const loginPath = '/login';
/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};




export async function getInitialState (): Promise<{
  currentUser?: API.CurrentUser;
}> {
  //获取登录token
  const token = sessionStorage.getItem('token') || null
  if (token) {
    const currentUser = await fetchUserInfo({ token })
    return { currentUser: currentUser.data }
  } else {
    if (history.location.pathname !== loginPath) {
      history.push('/login')
    }
    return {}
  }
}


export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    }
  };
};

export const request: RequestConfig = {
  timeout: 3000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [
    (_, options) => {
      return {
        options: {
          ...options,
          headers: {
            ...(options?.headers ?? {}),
            Authorization: `bearer ${sessionStorage.getItem('token')}`,    // 这里获取自己的token携带在请求头上
          },
        },
      };
    }
  ],
  responseInterceptors: [
    async (response) => {
      if (response) {
        if (response.status === 401) {   // token过期的时候自动刷新获取新的token自动登录，当然这是根据自己页面的需求决定，大多都是token过期跳转登录页面，重新登陆
          history.push('/login')
        }
      } else {
        notification.error({
          description: '网络错误',
          message: '网络异常'
        })
      }
      return response;
    }
  ],
  errorHandler: (error: ResponseError) => {
    notification.error({
      description: '网络错误',
      message: '网络异常'
    })
    return error
  }
};
