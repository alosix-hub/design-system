import type { StoryObj, Meta } from '@storybook/react'

import {
  Box,
  SelectAdvanced,
  SelectAdvancedProps,
  Text,
} from '@alosix-hub-ui/react'

const optionsMock = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'watermelon', label: 'Watermelon' },
  { value: 'mango', label: 'Mango' },
  { value: 'grape', label: 'Grape' },
  { value: 'papaya', label: 'Papaya' },
  { value: 'cucumber', label: 'Cucumber' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'potato', label: 'Potato' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'brunette', label: 'Brunette' },
  { value: 'bean', label: 'Bean' },
  { value: 'rice', label: 'Rice' },
  { value: 'salad', label: 'Salad' },
  { value: 'okra', label: 'Okra' },
  { value: 'basil', label: 'Basil' },
  { value: 'jackfruit', label: 'Jackfruit' },
  { value: 'grape', label: 'Grape' },
  { value: 'grape', label: 'Grape' },
]

export default {
  title: 'React/Form/SelectAdvanced',
  component: SelectAdvanced,
  args: {
    options: optionsMock,
    closeMenuOnSelect: false,
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Options</Text>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
} as Meta<SelectAdvancedProps>

export const Single: StoryObj<SelectAdvancedProps> = {
  args: {
    placeholder: 'Selecion2e',
  },
}

export const Multiple: StoryObj<SelectAdvancedProps> = {
  args: {
    isMulti: true,
    defaultValue: optionsMock[0],
  },
}