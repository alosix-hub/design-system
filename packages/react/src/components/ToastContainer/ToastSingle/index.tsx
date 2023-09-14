import { FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'
import { BiError } from 'react-icons/bi'

import { ToastSingleContainer } from './styles'

export interface ToastSingleMessage {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

interface ToastSingleProps {
  message: ToastSingleMessage
  removeToast(id: string): void
}

const icons = {
  info: <FiInfo size={24} />,
  error: <BiError size={24} />,
  success: <FiCheckCircle size={24} />,
}

export function ToastSingle({ message, removeToast }: ToastSingleProps) {
  return (
    <ToastSingleContainer
      type={message.type}
      hasDescription={!!message.description}
    >
      {icons[message.type ?? 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </ToastSingleContainer>
  )
}
