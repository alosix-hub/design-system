import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  border: '1px solid $gray200',
  display: 'flex',
  alignItems: 'center',
  height: '$12',

  '> svg': {
    marginRight: '$2',
    color: '$alosixG200',
    fontSize: '$xl',
  },

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$alosixG200',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray500',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray300',
  },
})
