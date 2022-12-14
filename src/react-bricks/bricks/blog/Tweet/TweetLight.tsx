import React, { useState } from 'react'
import {
  Image,
  RichTextExt,
  Text,
  types,
  useAdminContext,
  plugins,
  RichText,
} from 'react-bricks/frontend'
import { FaTwitter } from 'react-icons/fa'
import Section from '../layout/Section'
import blockNames from '../blockNames'

export interface TweetLightProps {
  tweetLink: string
  authorLink: string
}

const TweetLight: types.Brick<TweetLightProps> = ({
  tweetLink,
  authorLink,
}) => {
  const { isAdmin, previewMode } = useAdminContext()
  const [isMouseOver, setIsMouseOver] = useState(false)

  const handleClick = (tweetLink: string) => (event: React.MouseEvent) => {
    if (isAdmin && !previewMode) {
      return event.preventDefault()
    }
    if (typeof window !== undefined) {
      window.open(tweetLink)
    }
  }

  return (
    <Section>
      <div className="mx-auto max-w-lg px-6">
        <div
          onClick={handleClick(tweetLink)}
          className="block font-sans p-4 bg-white hover:bg-gray-50 border dark:bg-black border-gray-300 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200 rounded-xl"
        >
          <div className="flex items-start justify-between mb-3">
            <a
              href={authorLink}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mr-2 w-12 h-12">
                <Image
                  propName="author"
                  alt="athor-name"
                  imageClassName="rounded-full filter hover:brightness-90"
                />
              </div>
              <div className="group">
                <Text
                  propName="authorName"
                  placeholder="Author Name"
                  renderBlock={({ children }) => (
                    <div className="text-md text-gray-900 font-bold leading-tight group-hover:underline dark:text-neutral-300">
                      {children}
                    </div>
                  )}
                />
                <Text
                  propName="authorTwitterHandle"
                  placeholder="Author @"
                  renderBlock={({ children }) => (
                    <div className="text-sm text-gray-500 font-medium tracking-tight">
                      {children}
                    </div>
                  )}
                />
              </div>
            </a>
            <div
              className="text-2xl dark:text-neutral-300"
              style={{ color: '#1d9bf0' }}
            >
              <FaTwitter />
            </div>
          </div>
          <RichText
            propName="tweetContent"
            placeholder="tweet content"
            renderBlock={({ children }) => (
              <div className="mb-2 text-xl font-medium leading-tight dark:text-neutral-300">
                {children}
              </div>
            )}
            allowedFeatures={[types.RichTextFeatures.Link]}
            renderLink={({ children, href, attributes }) => (
              <a
                {...attributes}
                href={href}
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
                className="hover:text-sky-600"
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                style={{ color: isMouseOver ? '#1a8cd8' : '#1d9bf0' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )}
          />

          <Text
            propName="date"
            placeholder="Date"
            renderBlock={({ children }) => (
              <div className="inline-block font-normal text-gray-500 tracking-tight hover:underline">
                {children}
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  )
}

TweetLight.schema = {
  name: blockNames.TweetLight,
  label: 'Tweet 2',
  category: 'rb-ui blog',
  getDefaultProps: () => ({
    authorName: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Jan Kowalski',
          },
        ],
      },
    ],
    author: {
      src: 'https://images.reactbricks.com/original/b21a4d81-5354-48b5-88bf-89dc9ed6f302.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/b21a4d81-5354-48b5-88bf-89dc9ed6f302.svg',
      srcSet: '',
      width: 1249.24,
      height: 1249.24,
      alt: 'Imi?? autora',
      seoName: 'author',
    },
    tweetLink: 'https://twitter.com/matfrana/status/1237840583982329857',
    authorLink: 'https://twitter.com/matfrana',
    authorTwitterHandle: [
      {
        type: 'paragraph',
        children: [
          {
            text: '@JanKowalski',
          },
        ],
      },
    ],
    tweetContent: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Lorem ipsum dolor sit amet ',
          },
          {
            type: 'link',
            url: 'https://twitter.com/ReactBricks',
            children: [
              {
                text: '@ReactBricks',
              },
            ],
          },
          {
            text: '',
          },
        ],
      },
    ],
    date: [
      {
        type: 'paragraph',
        children: [
          {
            text: '10:18 ?? 4 Kwiecie??, 2022',
          },
        ],
      },
    ],
  }),
  sideEditProps: [
    {
      name: 'helper',
      label: 'Dlaczego jasny Tweet?',
      type: types.SideEditPropType.Custom,
      component: () => (
        <div className="text-sm">
          To jest uproszczona wersja bloku tre??ci Tweeta: nie ??aduje on Twittera
          JavaScript, wi??c jest znacznie lepszy pod wzgl??dem wydajno??ci, ale
          wymaga r??cznego wprowadzenia tre??ci i w??a??ciwo??ci Tweeta.
        </div>
      ),
    },
    {
      name: 'tweetLink',
      label: 'Adres Tweeta',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'authorLink',
      label: 'Link do autora',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default TweetLight
