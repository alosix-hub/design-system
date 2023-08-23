import { styled } from '../../styles'

export const SelectContainer = styled('div', {
  border: '1px solid $alosixG200',

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
  },
})

export const Error = styled('div', {})
