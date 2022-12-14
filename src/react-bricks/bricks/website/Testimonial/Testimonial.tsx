import * as React from 'react'
import classNames from 'classnames'
import { Text, Image, types } from 'react-bricks/frontend'

import Section, { Border } from '../layout/Section'
import Container from '../layout/Container'
import { bgColors } from '../colors'
import { FiUser } from 'react-icons/fi'
import blockNames from '../blockNames'
import { BackgroundColorsSideEditProps } from '../LayoutSideProps'

export interface TestimonialProps {
  authorName: string
  authorJobTitle: string
  avatarImage: types.IImageSource
  logoImage: types.IImageSource
  small?: boolean
  bg?: { color: string; className: string }
}

const Testimonial: types.Brick<TestimonialProps> = ({
  authorName,
  authorJobTitle,
  avatarImage,
  logoImage,
  small = false,
  bg = bgColors.white.value,
}) => {
  return (
    <Section bg={bg}>
      <Container
        size="sm"
        className={classNames(
          'pt-12 pb-20 flex flex-col justify-between ',
          small ? 'items-start' : 'items-center'
        )}
      >
        <Text
          renderBlock={(props) => (
            <div
              className={classNames(
                'flex-1 leading-relaxed text-center mb-6 text-gray-700 dark:text-gray-200 max-w-lg',
                small ? 'text-md text-left' : 'text-xl text-center'
              )}
            >
              {props.children}
            </div>
          )}
          placeholder="Cytat..."
          renderPlaceholder={(props) => {
            return <span>{props.children}</span>
          }}
          propName="quote"
        />
        <div className="flex items-center">
          {avatarImage ? (
            <Image
              alt={authorName}
              propName="avatarImage"
              imageClassName={classNames(
                'rounded-full',
                small ? 'w-8' : 'w-10'
              )}
            />
          ) : (
            <div
              className={classNames(
                'flex justify-center items-center rounded-full bg-gray-100 text-gray-500 text-xl',
                small ? 'w-8' : 'w-10'
              )}
            >
              <FiUser />
            </div>
          )}
          <div className="ml-3 dark:text-gray-200">
            <Text
              renderBlock={(props) => (
                <div className="text-sm font-bold">{props.children}</div>
              )}
              placeholder="Imi?? autora..."
              propName="authorName"
            />
            <Text
              renderBlock={(props) => (
                <div className="text-xs">{props.children}</div>
              )}
              placeholder="Tytu?? pracy..."
              propName="authorJobTitle"
            />
          </div>
          {logoImage && (
            <div className="ml-5 pl-5 border-l border-gray-300">
              <Image
                alt={authorJobTitle}
                propName="logoImage"
                imageClassName="h-6"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

Testimonial.schema = {
  name: blockNames.Testimonial,
  label: 'Za??wiadczenie',
  category: 'rb-ui website',

  getDefaultProps: () => ({
    quote:
      'Wykwalifikowana firma, kt??ra pomog??a nam zdefiniowa?? wymagania aplikacji do zarz??dzania produkcj?? i wdro??y??a j?? jako pi??kny system, kt??ry uwielbiaj?? nasi u??ytkownicy. Jeste??my bardzo zadowoleni.',
    authorName: 'Jan Kowalski',
    authorJobTitle: 'Za??o??yciel strony',
    avatarImage: {
      src: 'https://images.reactbricks.com/original/4a14877f-223a-4988-8279-6d2940885ce4.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/4a14877f-223a-4988-8279-6d2940885ce4.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-200.jpg 200w',
      alt: 'Jan',
      seoName: 'john',
    },
    logoImage: {
      src: 'https://images.reactbricks.com/original/dc2b9d0b-9a49-4674-bc88-fdd8fbf357ae.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/dc2b9d0b-9a49-4674-bc88-fdd8fbf357ae.svg',
      srcSet: '',
      alt: 'Nazwa strony',
      seoName: 'react-bricks',
    },
  }),
  sideEditProps: [
    {
      groupName: 'Uk??ad',
      defaultOpen: true,
      props: [BackgroundColorsSideEditProps],
    },
  ],
}

export default Testimonial
