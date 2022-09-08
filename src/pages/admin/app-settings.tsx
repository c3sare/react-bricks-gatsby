import React from 'react'
import { Admin, AppSettings } from 'react-bricks'

const AdminAppSettings: React.FC = () => {
  return (
    <Admin>
      <AppSettings />
    </Admin>
  )
}

export const Head = () => {
  return <title>App Settings</title>
}

export default AdminAppSettings
