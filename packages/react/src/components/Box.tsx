import { ComponentProps, ElementType } from 'react'
import { Box as BoxRadix } from '@radix-ui/themes'
import { styled } from '../styles'

export const Box = styled(BoxRadix, {})

export interface BoxRadix extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
