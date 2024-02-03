import React from 'react'
import HeaderComponent from '../Header/HeaderComponent'
const DefaultComponet = ({children}) => {
  return (
    <div>
        <HeaderComponent/>
        {children}
    </div>
  )
}

export default DefaultComponet