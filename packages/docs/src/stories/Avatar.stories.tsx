import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@alosix-ui/react'

export default {
  title: 'React/Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/13018367?v=4',
    alt: 'Robson Feitosa',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
