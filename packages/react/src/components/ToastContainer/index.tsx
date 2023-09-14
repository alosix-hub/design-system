import { ToastSingle, ToastSingleMessage } from './ToastSingle'
import { ToastContainer } from './styles'

export interface ToastProps {
  messages: ToastSingleMessage[]
  removeToast(id: string): void
}

export function Toast({ messages, removeToast }: ToastProps) {
  return (
    <ToastContainer empty={messages.length === 0}>
      {messages.map((message) => (
        <ToastSingle
          key={message.id}
          message={message}
          removeToast={removeToast}
        />
      ))}
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
