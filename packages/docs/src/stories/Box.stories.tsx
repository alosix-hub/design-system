import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@alosix-hub-ui/react'

export default {
  title: 'React/Form/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
