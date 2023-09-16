import { WarningCircle } from 'phosphor-react'
import ReactSelect, { Props as ReactSelectProps } from 'react-select'
import { DropdownIndicator } from './DropdownIndicator'

import { ErrorContainer, SelectContainer } from './styles'

interface Option {
  value: string
  label: string
}

export interface SelectAdvancedProps extends ReactSelectProps {
  name: string
  error?: string
  isChangeDoneIcon?: Option[] | null | undefined
}

export function SelectAdvanced({ name, error, ...props }: SelectAdvancedProps) {
  const colourStyles = {
    container: (styles: any) => {
      return {
        ...styles,
        color: '#fff',
        width: '100%',
        boxSizing: 'border-box',
      }
    },
    menuList: (styles: any) => ({
      ...styles,
      backgroundColor: 'transparent',
    }),
    control: (styles: any, { selectProps: { width } }: any) => ({
      ...styles,
      width,
      border: 0,
      boxShadow: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      color: '#fff',
      padding: 0,
      paddingLeft: 15,
      paddingRight: 15,
      height: props.isMulti ? 'auto' : '48px',
      minHeight: '46px',
    }),
    dropdownIndicator: (styles: any, state: any) => {
      const { isChangeDoneIcon } = props
      return {
        ...styles,
        color:
          state.selectProps.menuIsOpen &&
          isChangeDoneIcon !== undefined &&
          isChangeDoneIcon !== null &&
          isChangeDoneIcon.length !== 0
            ? '#5c9d3d'
            : '#b2b2b2',
        transform:
          state.selectProps.menuIsOpen && !state.isMulti && 'rotate(180deg)',
        fontSize: 18,
      }
    },
    option: (styles: any, { isDisabled }: any) => {
      return {
        ...styles,
        color: '#363636',
        opacity: 1,
        backgroundColor: 'transparent',
        cursor: isDisabled ? 'not-allowed' : 'pointer',

        ':hover': {
          ...styles[':hover'],
          color: '#e2c30a',
        },

        ':active': {
          ...styles[':active'],
          color: '#353535',
        },
      }
    },
    singleValue: (styles: any) => {
      const transition = 'opacity 300ms'

      return { ...styles, transition }
    },
    placeholder: (styles: any) => {
      return { ...styles, color: '#E1E1E6' }
    },
    valueContainer: (styles: any, { isMulti }: any) => {
      return {
        ...styles,
        padding: isMulti ? '10px 0' : 0,
        color: '#353535',
        fontSize: '0.875rem',
      }
    },
    indicatorSeparator: (styles: any) => {
      return { ...styles, opacity: 0.2, marginRight: 12 }
    },
    menu: (styles: any) => {
      return {
        ...styles,
        padding: 5,
        position: 'absolute',
        zIndex: 1,
      }
    },
  }
  return (
    <SelectContainer isErrored={!!error} isNotMulti={!props.isMulti}>
      <ReactSelect
        name={name}
        components={{
          DropdownIndicator: (rest) => DropdownIndicator(rest, props.isMulti),
        }}
        noOptionsMessage={() => 'Sem opções!'}
        styles={colourStyles}
        {...props}
      />

      {error && (
        <ErrorContainer title={error}>
          <WarningCircle color="#f91818" size={20} />
        </ErrorContainer>
      )}
    </SelectContainer>
  )
}

SelectAdvanced.displayName = 'SelectAdvanced'
