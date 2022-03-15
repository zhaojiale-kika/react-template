import { request } from 'umi';

/** 获取当前的用户 GET /api/currentUser */
export async function fetchUserInfo(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/currentUserInfo', {
    method: 'POST',
    ...(options || {}),
  });
}
