import React from 'react'
import { Link } from 'gatsby'
import { types } from 'react-bricks'

interface LayoutProps {
  allPages: types.Page[]
}

const Header: React.FC<LayoutProps> = ({ allPages }) => (
  <header
    className="bg-white sm:h-20 py-5 border-b sm:sticky top-0"
    style={{ zIndex: '9' }}
  >
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0 w-full justify-between">
          <img
            src="/react-bricks-logo.svg"
            className="w-48"
            alt="React Bricks"
          />
          <div className="sm:ml-8 flex space-x-5">
            <Link to="/" className="text-gray-500 hover:text-pink-700">
              {allPages.find((item) => item.slug === 'home')?.name}
            </Link>
            {allPages.map((page) => (
              <React.Fragment key={page.id}>
                {page.slug !== 'home' ? (
                  <Link
                    to={`/${page.slug}`}
                    className="text-gray-500 hover:text-pink-700"
                  >
                    {page.name}
                  </Link>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
