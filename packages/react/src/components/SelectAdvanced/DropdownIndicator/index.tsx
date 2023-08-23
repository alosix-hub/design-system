import { CaretDown, Check } from 'phosphor-react'
import { components } from 'react-select'

export function DropdownIndicator(props: any, isMulti: boolean | undefined) {
  const { menuIsOpen } = props.selectProps

  const isOpen = menuIsOpen && isMulti

  return (
    <components.DropdownIndicator {...props}>
      {isOpen ? <Check /> : <CaretDown />}
    </components.DropdownIndicator>
  )
}
