import { ReactNode } from 'react'
import { TooltipContainer } from './styles'

export interface TooltipProps {
  title: string
  className?: string
  children: ReactNode
}

export function Tooltip({ title, className, children }: TooltipProps) {
  return (
    <TooltipContainer className={className}>
      {children}
      <span>{title}</span>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
