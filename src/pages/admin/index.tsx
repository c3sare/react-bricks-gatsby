import React from 'react'
import { Admin, Login } from 'react-bricks'

const AdminLogin: React.FC = () => {
  return (
    <Admin isLogin>
      <Helmet title="Login" />
      <Login />
    </Admin>
  )
}

export const Head = () => {
  return <title>Login</title>
}

export default AdminLogin
