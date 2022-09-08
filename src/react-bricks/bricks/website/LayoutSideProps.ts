import { types } from 'react-bricks/frontend'
import { badgeColors, bgColors, bulletColors } from './colors'

export const BackgroundColorsSideEditProps: types.ISideEditProp = {
  name: 'bg',
  label: 'Tło',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      bgColors.white,
      bgColors.light,
      bgColors.gray,
      bgColors.lightBlue,
      bgColors.green,
      bgColors.orange,
      bgColors.darkBlue,
      bgColors.dark,
    ],
  },
}

export const ContainerSizeSideEditProps: types.ISideEditProp = {
  name: 'width',
  label: 'Szerokość',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'sm', label: 'Mała' },
      { value: 'md', label: 'Średnia' },
      { value: 'lg', label: 'Duża' },
      { value: 'full', label: 'Pełna' },
    ],
  },
}

export const BadgeColorsSideEditProps = {
  name: 'color',
  label: 'Kolor odznaki',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      badgeColors.gray,
      badgeColors.pink,
      badgeColors.blue,
      badgeColors.green,
    ],
  },
}

export const BulletColorsSideEditProps = {
  name: 'color',
  label: 'Kolor',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      bulletColors.pink,
      bulletColors.pinkLight,
      bulletColors.sky,
      bulletColors.skyLight,
      bulletColors.green,
      bulletColors.greenLight,
    ],
  },
}
