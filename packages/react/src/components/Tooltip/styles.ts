import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  position: 'relative',

  span: {
    width: '200px',
    background: '#f91818',
    padding: '8px',
    color: '#ffffffdd',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 500,
    opacity: 0,
    transition: 'opacity 0.4s',
    visibility: 'hidden',

    position: 'absolute',
    zIndex: 232323,
    bottom: 'calc(100% + 12px)',
    left: '50%',
    transform: 'translateX(-50%)',

    '&::before': {
      content: '',
      borderStyle: 'solid',
      borderColor: '#f91818 transparent',
      borderWidth: '6px 6px 0 6px',
      bottom: '20px',
      top: '100%',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },

  '&:hover span': {
    opacity: 1,
    visibility: 'visible',
  },
})
