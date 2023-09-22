import { styled } from '../../styles'
import { Tooltip } from '../Tooltip'

export const SelectContainer = styled('div', {
  border: '1px solid $gray200',
  backgroundColor: 'transparent',
  position: 'relative',

  variants: {
    isErrored: {
      true: {
        borderColor: '$alosixR200',
      },
    },
    isNotMulti: {
      true: {
        height: '$s12',
      },
    },
  },
})

export const ErrorContainer = styled(Tooltip, {
  height: '20px',
  marginLeft: '16px',
  position: 'absolute !important',
  top: '14px',
  right: '89px',
  zIndex: 2,

  svg: {
    margin: 0,
  },
})
