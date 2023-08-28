import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, TextInputContainer } from './styles'
import { IconProps } from 'phosphor-react'
import { IconBaseProps } from 'react-icons'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  size?: ComponentProps<typeof TextInputContainer>['size']
  startIcon?: React.ComponentType<IconProps | IconBaseProps>
}
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ size, startIcon: StartIcon, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer size={size}>
        {StartIcon && <StartIcon />}

        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
