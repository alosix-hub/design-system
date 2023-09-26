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
  zIndex: 9999999,
})

export const DialogContent = styled(Dialog.Content, {
  minWidth: '32rem',
  padding: '2.5rem 2rem',
  background: '$gray100',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 999999999,
})

export const DialogTrigger = styled(Dialog.Trigger, {})

export const DialogTitle = styled(Dialog.Title, {
  marginTop: 0,
  color: '$alosixG300',
  textTransform: 'uppercase',
  fontSize: '$2xl',
})

export const DialogClose = styled(Dialog.Close, {
  all: 'unset',
  borderRadius: '$xs',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $s4',
  marginTop: '$4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$s2',
  backgroundColor: '$alosixG300',
  transition: 'background .2s',

  cursor: 'pointer',

  svg: {
    width: '$s4',
    height: '$s4',
  },

  '&:not(:disabled):hover': {
    background: '$alosixG500',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',

        '&:disabled': {
          backgroundColor: '$gray700',
        },
      },

      secondary: {
        color: '$white',
        border: '2px solid $alosixG300',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },

      lg: {
        height: 65,
        minWidth: '245px',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
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
