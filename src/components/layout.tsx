import React, { ReactNode } from 'react'

import Header from './header'
import Footer from './footer'
import { types } from 'react-bricks'

interface LayoutProps {
  children?: ReactNode
  allPages: types.Page[]
}

const Layout: React.FC<LayoutProps> = ({ children, allPages }) => {
  return (
    <div className="flex flex-col h-screen justify-between antialiased">
      <Header allPages={allPages} />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
