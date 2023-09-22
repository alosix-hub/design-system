import { ComponentProps } from 'react'
import { Box as BoxRadix } from '@radix-ui/themes'
import { styled } from '../styles'

export const Box = styled(BoxRadix, {})

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box'
