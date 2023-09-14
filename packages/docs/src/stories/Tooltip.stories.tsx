import type { StoryObj, Meta } from '@storybook/react'

import { Tooltip, TooltipProps } from '@alosix-hub-ui/react'

export default {
  title: 'React/Data display/Tooltip',
  component: Tooltip,
  args: {
    messages: [
      {
        id: '1',
        type: 'success',
        title: 'Titulo',
        description: 'Descricao',
      },
      {
        id: '2',
        type: 'error',
        title: 'Titulo',
        description: 'Descricao',
      },
      {
        id: '3',
        type: 'info',
        title: 'Titulo',
        description: 'Descricao',
      },
    ],
    removeTooltip: (id: string) => console.log(id),
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
