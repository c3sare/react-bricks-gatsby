import React from 'react'
import { RichText, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

const Quote: types.Brick = () => {
  return (
    <Section>
      <Container>
        <div className="text-2xl my-8 pl-6 py-1 border-l-4 border-pink-500 dark:border-pink-400">
          <RichText
            propName="quote"
            placeholder="Wstaw cytat"
            renderBlock={({ children }) => (
              <p className="text-2xl italic text-gray-500 dark:text-gray-200">
                {children}
              </p>
            )}
          />
        </div>
      </Container>
    </Section>
  )
}

Quote.schema = {
  name: blockNames.Quote,
  label: 'Cytat',
  category: 'rb-ui blog',
  getDefaultProps: () => ({
    quote: 'Innowacja rozróżnia lidera od naśladowcy.',
  }),
}

export default Quote
