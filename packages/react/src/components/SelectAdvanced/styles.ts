import { styled } from '../../styles'

export const SelectContainer = styled('div', {
  border: '1px solid $gray200',
  backgroundColor: 'transparent',

  variants: {
    isErrored: {
      true: {
        borderColor: '$alosixR500',
      },
    },
    isFilled: {
      true: {
        color: '$alosixG200',
      },
    },
    isFocused: {
      true: {
        color: '$alosixG200',
      },
    },
    isNotMulti: {
      true: {
        height: '$12',
      },
    },
  },
})

export const Error = styled('div', {})
