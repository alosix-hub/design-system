import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, Checkbox, CheckboxProps } from '@alosix-hub-ui/react'

export default {
  title: 'React/Form/Checkbox',
  component: Checkbox,
  args: {
    onChange: () => console.log('teste'),
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Acdept terms of use</Text>
        </Box>
      )
    },
  ],
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
