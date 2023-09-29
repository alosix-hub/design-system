import { ReactNode } from 'react'
import { X } from 'phosphor-react'

import {
  CloseButton,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from './styles'

export interface DialogProps {
  children: ReactNode
  title: string
  container?: HTMLElement | null | undefined
}

export function Dialog({ children, title, container }: DialogProps) {
  return (
    <DialogPortal container={container}>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>

        <CloseButton asChild>
          <X />
        </CloseButton>

        {children}
      </DialogContent>
    </DialogPortal>
  )
}

Dialog.displayName = 'Dialog'
