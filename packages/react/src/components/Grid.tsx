import { ComponentProps } from 'react'
import { Grid as GridRadix } from '@radix-ui/themes'
import { styled } from '../styles'

export const Grid = styled(GridRadix, {})

export type GridProps = ComponentProps<typeof Grid>

Grid.displayName = 'Grid'
