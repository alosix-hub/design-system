import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$xs',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $s4',

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

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
