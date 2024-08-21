import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false)
    const Icon = (
        <FontAwesomeIcon
        icon={visible ?  faEye : faEyeSlash}
        onClick={() => setVisible(visible => !visible)}
        />
    )
    const InputType = visible ? 'text' : 'password'

  return [InputType, Icon]
    
  
}


