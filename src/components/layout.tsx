import React, { ReactNode } from 'react'

import Header from './header'
import Footer from './footer'
import { Pagex } from '../templates/page'

interface LayoutProps {
  children?: ReactNode
  pages: Pagex[]
}

const Layout: React.FC<LayoutProps> = ({ children, pages }) => {
  return (
    <div className="flex flex-col justify-between antialiased" style={{minHeight: '100vh'}}>
      <Header pages={pages} />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
