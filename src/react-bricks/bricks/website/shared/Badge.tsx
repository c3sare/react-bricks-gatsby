import * as React from 'react'
import classNames from 'classnames'
import { badgeColors } from '../colors'

import { Text, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import { BadgeColorsSideEditProps } from '../../website/LayoutSideProps'

export interface BadgeProps {
  color?: { color: string; className: string }
  className?: string
}

const Badge: types.Brick<BadgeProps> = ({
  color = badgeColors.gray.value,
  className,
  ...rest
}) => {
  return (
    <div {...rest} className="flex justify-center items-center">
      <Text
        renderBlock={(props) => (
          <span
            className={classNames(
              'text-sm font-black uppercase text-center',
              color.className,
              className
            )}
            style={{ letterSpacing: '0.35em' }}
          >
            {props.children}
          </span>
        )}
        placeholder="Odznaka..."
        propName="text"
      />
    </div>
  )
}

Badge.schema = {
  name: blockNames.Badge,
  label: 'Odznaka',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    text: 'Specjalny',
    color: badgeColors.gray.value,
  }),
  sideEditProps: [BadgeColorsSideEditProps],
}

export default Badge
