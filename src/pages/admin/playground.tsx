import React from 'react'
import { Admin, Playground } from 'react-bricks'

const AdminPlayground: React.FC = () => {
  return (
    <Admin>
      <Playground />
    </Admin>
  )
}

export const Head = () => {
  return <title>Playground</title>
}

export default AdminPlayground
