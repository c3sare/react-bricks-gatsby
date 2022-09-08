import classNames from 'classnames'
import dayjs from 'dayjs'
import React from 'react'
import { Text, types, usePageValues } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'
import DefaultAvatar from './DefaultAvatar'

export interface TitleProps {
  size?: 'medium' | 'large'
}

const Title: types.Brick<TitleProps> = ({ size = 'large' }) => {
  const [pageValues] = usePageValues()
  return (
    <Section>
      <Container>
        <div
          className={classNames(
            'text-3xl',
            { 'sm:text-5xl': size === 'large' },
            { 'sm:text-4xl': size === 'medium' }
          )}
        >
          <Text
            propName="title"
            renderBlock={(prop) => {
              return (
                <h1
                  className={classNames(
                    'text-left font-black text-gray-900 dark:text-gray-100 mb-3'
                  )}
                >
                  {prop.children}
                </h1>
              )
            }}
            placeholder="Wpisz tytuł..."
          />
        </div>

        <div className="flex items-center space-x-2">
          {pageValues.author.avatarUrl ? (
            <img
              src={pageValues.author.avatarUrl}
              alt="Autor"
              className="rounded-full w-12 h-12"
            />
          ) : (
            <DefaultAvatar className="rounded-full w-12 h-12" />
          )}
          <div className="text-gray-700 dark:text-gray-200">
            {pageValues.author.firstName || 'Jan'}{' '}
            {pageValues.author.lastName || 'Kowalski'}
            <span className="text-sm text-gray-300 dark:text-gray-500 px-2">
              •
            </span>
            {dayjs(pageValues.publishedAt || new Date()).format(
              'MMMM DD, YYYY'
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}

Title.schema = {
  name: blockNames.Title,
  label: 'Tytuł',
  category: 'rb-ui blog',
  getDefaultProps: () => ({
    title: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'To jest tytuł artykułu',
          },
        ],
      },
    ],
  }),
}

export default Title
