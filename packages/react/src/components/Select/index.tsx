import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { ArrowDown, ArrowUp, Check, CheckCircle } from 'phosphor-react'
import {
  SelectContainer,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItemContainer,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './styles'
import { SelectItemIndicator } from '@radix-ui/react-select'

export type SelectProps = ComponentProps<typeof SelectContainer>

export function Select(props: SelectProps) {
  return (
    <SelectContainer {...props}>
      <SelectTrigger className="SelectTrigger" aria-label="Food">
        <SelectValue placeholder="Select a fruit…" />
        <SelectIcon className="SelectIcon">
          <ArrowDown />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent className="SelectContent">
          <SelectScrollUpButton className="SelectScrollButton">
            <ArrowUp />
          </SelectScrollUpButton>
          <SelectViewport className="SelectViewport">
            <SelectGroup>
              <SelectLabel className="SelectLabel">Fruits</SelectLabel>
              <SelectItem value="beef">Beef</SelectItem>
              <SelectItem value="chicken">Chicken</SelectItem>
              <SelectItem value="lamb">Lamb</SelectItem>
              <SelectItem value="pork">Pork</SelectItem>
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton className="SelectScrollButton">
            <ArrowDown />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectContainer>
  )
}

export type SelectItemProps = ComponentProps<typeof SelectItemContainer>

const SelectItem = forwardRef<
  ElementRef<typeof SelectItemContainer>,
  SelectItemProps
>(({ children, ...props }: SelectItemProps, forwardedRef) => {
  return (
    <SelectItemContainer {...props} ref={forwardedRef}>
      <SelectItemText>{children}</SelectItemText>
      <SelectItemIndicator>
        <CheckCircle />
      </SelectItemIndicator>
    </SelectItemContainer>
  )
})

SelectItem.displayName = 'SelectItem'
Select.displayName = 'Select'
