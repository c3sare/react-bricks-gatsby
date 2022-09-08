import * as React from 'react'
import { useEffect, useRef, useState, useContext } from 'react'
import { types, ReactBricksContext } from 'react-bricks/frontend'

import blockNames from '../blockNames'

import Container from '../layout/Container'
import Section from '../layout/Section'

export interface TweetProps {
  id: string
  placeholder: string
  align: string
  cards: string
  conversation: string
  theme: string
}

const Tweet: types.Brick<TweetProps> = ({
  id,
  placeholder,
  align,
  cards,
  conversation,
  theme,
}) => {
  const twitterEmbedRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { isDarkColorMode } = useContext(ReactBricksContext)

  useEffect(() => {
    const isBlackTheme: boolean =
      theme === 'dark' || (theme === 'auto' && !!isDarkColorMode)
    const twTheme: string = isBlackTheme ? 'dark' : ''

    if (twitterEmbedRef?.current) {
      const currentDocument = twitterEmbedRef?.current.ownerDocument
      const currentWindow = twitterEmbedRef?.current.ownerDocument.defaultView

      var script = currentDocument.createElement('script')
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      script.onload = () => {
        // @ts-ignore
        const twttr = currentWindow!['twttr']
        twttr.ready().then(({ widgets }: any) => {
          // Clear previously rendered tweet before rendering the updated tweet id
          if (twitterEmbedRef.current) {
            twitterEmbedRef.current.innerHTML = ''
          }

          // const { options, onTweetLoadSuccess, onTweetLoadError } = props
          widgets
            .createTweetEmbed(id, twitterEmbedRef.current, {
              align,
              cards,
              conversation,
              theme: twTheme,
            })
            .then(() => {
              setIsLoading(false)
            })
        })
      }
      currentDocument.body.appendChild(script)
    }
  }, [
    isLoading,
    id,
    placeholder,
    align,
    cards,
    conversation,
    theme,
    isDarkColorMode,
  ])

  return (
    <Section>
      <Container>
        <div ref={twitterEmbedRef}>{isLoading && placeholder}</div>
      </Container>
    </Section>
  )
}

Tweet.schema = {
  name: blockNames.Tweet,
  label: 'Tweet',
  category: 'rb-ui blog',
  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    id: '1237840583982329857',
    placeholder: 'Loading Tweet',
    position: 'center',
    cards: 'hidden',
    conversation: 'none',
    theme: 'auto',
    align: 'center',
  }),
  sideEditProps: [
    {
      name: 'id',
      label: 'Tweet ID',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'placeholder',
      label: 'W trakcie ładowania pokazuj inny element',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'align',
      label: 'Wyrównać do',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'left', label: 'Lewej' },
          { value: 'center', label: 'Środka' },
          { value: 'right', label: 'Prawej' },
        ],
      },
    },
    {
      name: 'cards',
      label: 'Karty',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '', label: 'Pokaż' },
          { value: 'hidden', label: 'Ukryj' },
        ],
      },
    },
    {
      name: 'conversation',
      label: 'Konwersacja',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '', label: 'Pokaż' },
          { value: 'none', label: 'Ukryj' },
        ],
      },
    },
    {
      name: 'theme',
      label: 'Motyw',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'auto', label: 'Automatyczny' },
          { value: 'light', label: 'Jasny' },
          { value: 'dark', label: 'Ciemny' },
        ],
      },
    },
  ],
}

export default Tweet
