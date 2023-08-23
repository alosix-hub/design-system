import { styled } from '../../styles'

export const SelectContainer = styled('div', {
  border: '1px solid $gray100',
  backgroundColor: '$white',

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
        height: '$10',
      },
    },
  },
})

export const Error = styled('div', {})
