import type { StoryObj, Meta } from '@storybook/react'

import {
  Box,
  SelectAdvanced,
  SelectAdvancedProps,
  Text,
} from '@alosix-hub-ui/react'

// TODO
export default {
  title: 'React/Form/SelectAdvanced',
  component: SelectAdvanced,
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Options</Text>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
} as Meta<SelectAdvancedProps>

export const Single: StoryObj<SelectAdvancedProps> = {
  args: {
    placeholder: 'Selecione',
  },
}

export const Multiple: StoryObj<SelectAdvancedProps> = {
  args: {
    isMulti: true,
    defaultValue: { label: 'aple1', value: 'aple' },
  },
}
