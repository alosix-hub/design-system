import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps } from '@alosix-hub-ui/react'
import { Grid } from '@radix-ui/themes'

export default {
  title: 'React/Form/Box',
  component: Box,
  args: {
    children: (
      <Grid>
        <Box width={{ initial: '3', md: '3', lg: '2' }}>
          <span>item 1</span>
        </Box>
        <Box width={{ initial: '3', md: '3', lg: '2' }}>
          <span>item 1</span>
        </Box>
        <Box width={{ initial: '3', md: '3', lg: '2' }}>
          <span>item 1</span>
        </Box>
      </Grid>
    ),
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
