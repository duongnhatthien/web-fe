import React from 'react'

const TypeProductComponent = ({name}) => {
  return (
    <div
      style={
        {
          display: 'block',
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '150%',
          color: 'rgb(128, 128, 137)',
          marginRight: '12px',
          whiteSpace: 'nowrap',
          cursor: 'pointer'
        }
      }
    >{name}</div>
  )
}

export default TypeProductComponent