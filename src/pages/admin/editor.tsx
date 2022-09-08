import React from 'react'
import { Admin, Editor } from 'react-bricks'

const AdminEditor: React.FC = () => {
  return (
    <Admin>
      <Editor />
    </Admin>
  )
}

export const Head = () => {
  return <title>Editor</title>
}

export default AdminEditor
