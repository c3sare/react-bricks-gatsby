import * as React from 'react'
import classNames from 'classnames'
import { Link, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'

export interface ButtonProps {
  text: string
  href: string
  isTargetBlank: boolean
  isBigButton: boolean
  variant?: 'pink' | 'sky'
  type?: 'solid' | 'outline'
  padding: 'normal' | 'small'
  className?: string
}

const Button: types.Brick<ButtonProps> = ({
  text,
  href,
  isTargetBlank = false,
  isBigButton = false,
  variant = 'pink',
  type = 'solid',
  padding = 'normale',
  className,
  ...rest
}) => {
  const target = isTargetBlank
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      {...target}
      className={classNames(
        'py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150',
        padding === 'normal' ? 'px-8' : 'px-5',
        isBigButton && ' w-3/5 text-center rounded-full',
        {
          'bg-pink-500 text-white hover:bg-pink-600 hover:text-white':
            variant === 'pink' && type === 'solid',
        },
        {
          'bg-sky-500 text-white hover:bg-sky-600 hover:text-white':
            variant === 'sky' && type === 'solid',
        },
        {
          'border border-pink-600 text-pink-600 hover:text-pink-600 dark:border-pink-500 dark:text-pink-500':
            variant === 'pink' && type === 'outline',
        },
        {
          'border border-sky-600 text-sky-600 hover:text-sky-600 dark:border-sky-500 dark:text-sky-500':
            variant === 'sky' && type === 'outline',
        },
        className
      )}
      {...rest}
    >
      {text}
    </Link>
  )
}

Button.schema = {
  name: blockNames.Button,
  label: 'Przycisk',
  category: 'rb-ui website',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    text: 'Kliknij',
    href: '',
    isTargetBlank: false,
    variant: 'sky',
    type: 'solid',
    isBigButton: false,
  }),
  sideEditProps: [
    {
      name: 'text',
      label: 'Tekst przycisku',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isBigButton',
      label: 'Przycisk na całą szerokość',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'variant',
      label: 'Wariant',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'sky', label: 'Niebo' },
          { value: 'pink', label: 'Różowy' },
        ],
      },
    },
    {
      name: 'type',
      label: 'Typ',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'solid', label: 'Solidny' },
          { value: 'outline', label: 'Zarys' },
        ],
      },
    },
    {
      name: 'href',
      label: 'Link (zewnętrzny lub ścieżka)',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isTargetBlank',
      label: 'Otwórz w nowym oknie',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default Button
