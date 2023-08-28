import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@alosix-hub-ui/react'
import { FaLeaf } from 'react-icons/fa'

export default {
  title: 'React/Form/Text Input',
  component: TextInput,
  args: {},
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    startIcon: FaLeaf,
  },
  argTypes: {
    startIcon: {
      options: ['FaLeaf'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
}
