import { ComponentProps, ElementRef, forwardRef } from 'react'
import { ErrorContainer, Input, TextInputContainer } from './styles'
import { IconProps, WarningCircle } from 'phosphor-react'
import { IconBaseProps } from 'react-icons'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  error?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
  startIcon?: React.ComponentType<IconProps | IconBaseProps>
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ size, startIcon: StartIcon, error, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer error={!!error} size={size}>
        {StartIcon && <StartIcon />}

        <Input ref={ref} {...props} />

        {error && (
          <ErrorContainer title={error}>
            <WarningCircle color="#f91818" size={20} />
          </ErrorContainer>
        )}
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
