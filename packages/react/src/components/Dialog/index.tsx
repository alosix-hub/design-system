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
}

export function Dialog({ children, title }: DialogProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>

        <CloseButton>
          <X />
        </CloseButton>

        {children}
      </DialogContent>
    </DialogPortal>
  )
}

Dialog.displayName = 'Dialog'
