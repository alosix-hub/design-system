import { styled } from '../../styles'
import { Tooltip } from '../Tooltip'

export const SelectContainer = styled('div', {
  border: '1px solid $gray200',
  backgroundColor: 'transparent',

  variants: {
    isErrored: {
      true: {
        borderColor: '$alosixR200',
      },
    },
    isNotMulti: {
      true: {
        height: '$12',
      },
    },
  },
})

export const ErrorContainer = styled(Tooltip, {})
