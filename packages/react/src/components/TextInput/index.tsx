import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, TextInputContainer } from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> { 
  size?: ComponentProps<typeof TextInputContainer>['size']
}
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(({ prefix, size, ...props}: TextInputProps, ref ) => {
  return (
    <TextInputContainer size={size}> 
      <Input ref={ref} {...props} />
    </TextInputContainer>
  )
})

TextInput.displayName = 'TextInput'
