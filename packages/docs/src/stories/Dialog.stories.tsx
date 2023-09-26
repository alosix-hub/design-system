import type { StoryObj, Meta } from '@storybook/react'

import {
  Button,
  Dialog,
  DialogProps,
  DialogRoot,
  DialogTrigger,
  Text,
} from '@alosix-hub-ui/react'

export default {
  title: 'React/Data display/Dialog',
  component: Dialog,
  args: {
    children: <Text>Description</Text>,
    title: 'Titulo',
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <DialogRoot>
            <DialogTrigger asChild>
              <Button type="button">Modal</Button>
            </DialogTrigger>
            {Story()}
          </DialogRoot>
        </div>
      )
    },
  ],
} as Meta<DialogProps>

export const Primary: StoryObj<DialogProps> = {}
