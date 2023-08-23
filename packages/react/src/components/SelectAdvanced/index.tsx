import { WarningCircle } from 'phosphor-react'
import ReactSelect, { Props as ReactSelectProps } from 'react-select'
import { DropdownIndicator } from './DropdownIndicator'

import { Error, SelectContainer } from './styles'

interface Option {
  value: string
  label: string
}

export interface SelectAdvancedProps extends ReactSelectProps {
  name: string
  error: boolean
  defaultValue: Option
  isChangeDoneIcon?: Option[] | null | undefined
}

export function SelectAdvanced({
  name,
  error,
  defaultValue,
  ...props
}: SelectAdvancedProps) {
  const colourStyles = {
    container: (styles: any) => {
      return {
        ...styles,
        color: '#fff',
        width: '100%',
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
      height: props.isMulti ? 'auto' : '42px',
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
      return { ...styles, color: '#808080' }
    },
    valueContainer: (styles: any, { isMulti }: any) => {
      return {
        ...styles,
        padding: isMulti ? '10px 0' : 0,
        color: '#353535',
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
  // const inputRef = useRef(null)

  // const [isFocused, setIsFocused] = useState(false)
  // const [isFilled, setIsFilled] = useState(false)

  // function handleInputFocus() {
  //   setIsFocused(true)
  // }
  // function handleInputBlur() {
  //   setIsFocused(false)

  //   // setIsFilled(!!inputRef.current)
  // }

  return (
    <SelectContainer
      isErrored={error}
      isFilled={true}
      isFocused={false}
      isNotMulti={!props.isMulti}
    >
      <ReactSelect
        name={name}
        // onFocus={handleInputFocus}
        // onBlur={handleInputBlur}
        defaultValue={defaultValue}
        components={{
          DropdownIndicator: (rest) => DropdownIndicator(rest, props.isMulti),
        }}
        noOptionsMessage={() => 'Sem opções!'}
        styles={colourStyles}
        {...props}
      />

      {error && (
        <Error>
          <WarningCircle color="#f91818" size={20} />
        </Error>
      )}
    </SelectContainer>
  )
}

SelectAdvanced.displayName = 'SelectAdvanced'
