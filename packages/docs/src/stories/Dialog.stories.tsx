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
import React, { useRef } from 'react'
export default {
  title: 'React/Data display/Dialog',
  component: Dialog,
  decorators: [
    (Story) => {
      const [container, setContainer] = React.useState<
        HTMLElement | null | undefined
      >(null)

      return (
        <div>
          <DialogRoot>
            <DialogTrigger asChild>
              <Button>Modal</Button>
            </DialogTrigger>
            {Story({
              args: {
                container,
                children: (
                  <div>
                    <Text>Description</Text>
                    <DialogClose> Save and Close</DialogClose>
                  </div>
                ),
                title: 'Title',
              },
            })}
          </DialogRoot>

          <div id="modal-custom" ref={setContainer} />
        </div>
      )
    },
  ],
} as Meta<DialogProps>

export const Primary: StoryObj<DialogProps> = {}
