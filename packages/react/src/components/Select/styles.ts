import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectContainer = styled(Select.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&:[data-state="checked"]': {
    backgroundColor: '$alosix300',
  },

  '&:focus, &:[data-state="checked"]': {
    border: '2px solid $alosix300',
  },
})

export const SelectTrigger = styled(Select.Trigger, {})

export const SelectValue = styled(Select.Value, {})

export const SelectIcon = styled(Select.Icon, {})
export const SelectPortal = styled(Select.Portal, {})
export const SelectContent = styled(Select.Content, {})
export const SelectScrollUpButton = styled(Select.ScrollUpButton, {})
export const SelectViewport = styled(Select.Viewport, {})
export const SelectLabel = styled(Select.Label, {})
export const SelectItemContainer = styled(Select.Item, {})
export const SelectItemText = styled(Select.ItemText, {})
export const SelectGroup = styled(Select.Group, {})
export const SelectScrollDownButton = styled(Select.ScrollDownButton, {})
export const SelectItemIndicator = styled(Select.ItemIndicator, {})
