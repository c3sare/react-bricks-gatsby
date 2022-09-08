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
    <div className="flex flex-col h-screen justify-between antialiased">
      <Header pages={pages} />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
