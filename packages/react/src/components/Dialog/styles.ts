import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles'

export const DialogRoot = styled(Dialog.Root, {})

export const DialogPortal = styled(Dialog.Portal, {})

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.40)',
})

export const DialogContent = styled(Dialog.Content, {
  minWidth: '32rem',
  padding: '2.5rem 2rem',
  background: '$gray100',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const DialogTrigger = styled(Dialog.Trigger, {})

export const DialogTitle = styled(Dialog.Title, {
  marginTop: 0,
  color: '$alosixG300',
  textTransform: 'uppercase',
  fontSize: '$2xl',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray500',
  padding: '0',

  svg: {
    height: '$4',
    width: '$4',
  },
})
