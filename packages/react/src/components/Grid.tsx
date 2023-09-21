import { ComponentProps, ElementType } from 'react'
import { Grid as GridRadix } from '@radix-ui/themes'
import { styled } from '../styles'

export const Grid = styled(GridRadix, {})

export interface GridProps extends ComponentProps<typeof Grid> {
  as?: ElementType
}

Grid.displayName = 'Grid'
