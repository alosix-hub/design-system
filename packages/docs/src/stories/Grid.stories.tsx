import type { StoryObj, Meta } from '@storybook/react'

import { Grid, GridProps, Box } from '@alosix-hub-ui/react'

export default {
  title: 'React/Data display/Grid',
  component: Box,
  args: {
    children: (
      <Grid>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
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
} as Meta<GridProps>

export const Primary: StoryObj<GridProps> = {}
