import  { useState } from 'react'
import Context from './Context'



const ContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClick = () => {
        setIsOpen(pre => !pre)
      }
  return (
    
      <Context.Provider value={{isOpen, setIsOpen, handleClick}} >
        {children}
      </Context.Provider>
    
  )
}

export default ContextProvider
