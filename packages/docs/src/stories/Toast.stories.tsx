import type { StoryObj, Meta } from '@storybook/react'

import { Toast, ToastProps } from '@alosix-hub-ui/react'

export default {
  title: 'React/Data display/Toast',
  component: Toast,
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
    removeToast: (id: string) => console.log(id),
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
