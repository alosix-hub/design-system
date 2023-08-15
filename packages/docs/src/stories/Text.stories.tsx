import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@alosix-ui/react'

export default {
  title: 'Typografy/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    size: 'md',
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    size: 'xxs',
  },
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
