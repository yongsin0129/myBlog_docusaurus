import React from 'react'

export const TextCenter = ({ children }) => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem', color: 'burlywood' }}>{children}</div>
  )
}

export const TextColor = (props) => {
  const textColor = props.color
  return (
    <div style={{ textAlign: 'center', margin: '2rem', color: textColor }}>TextColor by color variable</div>
  )
}