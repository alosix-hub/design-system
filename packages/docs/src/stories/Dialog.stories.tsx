import type { StoryObj, Meta } from '@storybook/react'

import {
  Button,
  Dialog,
  DialogProps,
  DialogRoot,
  DialogTrigger,
  DialogClose,
  Text,
} from '@alosix-hub-ui/react'

export default {
  title: 'React/Data display/Dialog',
  component: Dialog,
  args: {
    children: (
      <div>
        <Text>Description</Text>
        <DialogClose> Save and Close</DialogClose>
      </div>
    ),
    title: 'Title',
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <DialogRoot>
            <DialogTrigger asChild>
              <Button>Modal</Button>
            </DialogTrigger>
            {Story()}
          </DialogRoot>
        </div>
      )
    },
  ],
} as Meta<DialogProps>

export const Primary: StoryObj<DialogProps> = {}
