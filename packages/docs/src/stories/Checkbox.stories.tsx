import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, Checkbox, CheckboxProps } from '@alosix-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
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
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
