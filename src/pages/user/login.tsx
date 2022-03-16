
import { fetchUserInfo } from '@/services/user/index'
import { useModel, history } from 'umi'



const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const login = async () => {
    //这里应该发请求获取token，为了省略这个就直接写了
    const token = '42423424324243'
    sessionStorage.setItem('token', token)
    const currentUser = await fetchUserInfo({ token })
    await setInitialState((s) => ({
      ...s,
      currentUser: currentUser.data
    }))
    history.push('/')
  }
  return (
    <div>
      <h2>login</h2>
      <h1>增加新的数据</h1>
      <h2>增加的数据2</h2>
      <button onClick={() => login()}>登录</button>
    </div>
  )

}

export default Login
